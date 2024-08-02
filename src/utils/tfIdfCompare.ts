// import { Requirement, RequirementEducation } from '@prisma/client';
import { Education, Requirement, RequirementEducation } from '@prisma/client';
import * as natural from 'natural';


export const tf_idf_compare = (lowongan: (Requirement & { education: RequirementEducation[] })[], profil_pengguna: string, age: number, resumeEducation: Education[]) => {
    // Langkah 3: Menggabungkan Bidang Teks
    const teksLowonganGabungan: string[] = lowongan.map(job => `${job.position} ${job.desc_job.join(', ')} ${job.keyword.join(', ')} ${job.skill.join(', ')} ${job.education.map(it => `${it.degree} ${it.major}`)}`);        
    const teksProfilPengguna: string = profil_pengguna;    

    // Langkah 4: Vektorisasi TF-IDF
    const tfidf = new natural.TfIdf();
    teksLowonganGabungan.forEach(text => tfidf.addDocument(text));
    tfidf.addDocument(teksProfilPengguna);    

    // Fungsi untuk mendapatkan vektor TF-IDF untuk sebuah dokumen
    const getTfIdfVector = (tfidf: natural.TfIdf, docIndex: number): { [key: string]: number } => {
    const vector: { [key: string]: number } = {};
    tfidf.listTerms(docIndex).forEach(item => {
        vector[item.term] = item.tfidf;
    });
        return vector;
    };    


    // Mendapatkan vektor TF-IDF untuk lowongan pekerjaan dan profil pengguna
    const vektorLowongan = teksLowonganGabungan.map((_, i) => getTfIdfVector(tfidf, i));
    const vektorPengguna = getTfIdfVector(tfidf, teksLowonganGabungan.length);    

    // Langkah 5: Perhitungan Kemiripan Kosinus
    const cosineSimilarity = (vecA: { [key: string]: number }, vecB: { [key: string]: number }): number => {
    const dotProduct = Object.keys(vecA).reduce((sum, key) => sum + (vecA[key] || 0) * (vecB[key] || 0), 0);
    const magnitudeA = Math.sqrt(Object.values(vecA).reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(Object.values(vecB).reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitudeA * magnitudeB);
    };

    // Menghitung skor kemiripan
    const skorKemiripan = vektorLowongan.map(vektorLowongan => cosineSimilarity(vektorPengguna, vektorLowongan));

    // console.log(skorKemiripan.sort())

    console.log(Math.max(...skorKemiripan))

    // Mendapatkan indeks lowongan dengan skor kemiripan tertinggi
    const indeksTerbaik = skorKemiripan.indexOf(Math.max(...skorKemiripan));
    // const lowonganTerbaik = lowongan[indeksTerbaik];

    //pencocokan untuk umur dan nilai
    const lowonganDenganSkor = lowongan.map((job, index) => {
        let educationMatch = 0
        job.education.forEach(edu => {
            const userEdu = resumeEducation.find(cvedu => cvedu.degree === edu.degree);
            if (userEdu && parseInt(edu.degree) > userEdu.grade) {
              educationMatch += 1;
            }
          });
        
        const ageMatch = age >= job.min_age && age <= job.max_age ? 1 : 0

        const finalSimilarityScore = skorKemiripan[index] + educationMatch + ageMatch;

        return {
            ...job,
            similarityScore: finalSimilarityScore,
            educationMatch,
            ageMatch
        }        
    });

    const lowonganDiurutkan = lowonganDenganSkor.sort((a, b) => 
        b.similarityScore - a.similarityScore || 
        b.educationMatch - a.educationMatch ||
        Number(b.ageMatch) - Number(a.ageMatch)
    );

    return lowonganDiurutkan
}