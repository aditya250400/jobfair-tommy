import { Request, Response } from "express";
import { tf_idf_compare } from "../utils/tfIdfCompare";
import calculateAge from "../utils";
import prisma from '../../prisma/db'

interface Job {
  job_id: number;
  title: string;
  description: string;
  skills: string;
}

interface UserProfile {
  user_id: number;
  resume: string;
}

const getResult = async (req: Request, res: Response) => {
  const lowongan: Job[] = [
    {
      job_id: 1,
      title: "Software Engineer",
      description: "Mengembangkan aplikasi perangkat lunak",
      skills: "Java, Spring, SQL",
    },
    {
      job_id: 2,
      title: "Data Scientist",
      description: "Menganalisis data menggunakan machine learning",
      skills: "Python, Machine Learning, Data Analysis",
    },
    {
      job_id: 3,
      title: "Marketing Manager",
      description: "Merencanakan dan melaksanakan strategi pemasaran",
      skills: "SEO, Content Marketing, Social Media",
    },
  ];

  const userId: number = req.user_id as number

  const getCV = await prisma.cV.findFirst({
    where: {
      user_id: userId,
    },
    include: {
      achievement: true,
      experience: true,
      skill: true,
      educations: true,
    },
  });

  if (getCV) {
    const getAge = calculateAge(getCV.birth_date.toString());
    console.log(getAge)
    const getRequirement = await prisma.requirement.findMany({
      include: {
        education: true,
        company: true
      },
    });
    if (getRequirement) {
      const combineResume = `
            ${getCV.desc}                 
                ${getCV.achievement.map((it: any) => ` ${it.name} ${it.provider} `)}
                ${getCV.experience.map(
                  (it: any) => ` ${it.name} ${it.description} `
                )}
                ${getCV.skill.map((it: any) => ` ${it.name} ${it.skill}`)}
                ${getCV.educations.map(
                  (it: any) => `${it.degree} ${it.major} ${it.desc}`
                )}                                
            `;
    //   console.log(combineResume.replace(/\s+/g, " "));
      const lowonganTerbaik = tf_idf_compare(getRequirement, combineResume.replace(/\s+/g, " "), getAge, getCV.educations);
      return res.json({
        status: true,
        resume: getCV,
        recommendation: lowonganTerbaik
      });
    }
  }

  return res.json({
    status: false,
    message: "",
  });

  // const profil_pengguna: UserProfile = {
  //     user_id: 1,
  //     resume: 'Berpengalaman dalam analisis data dan machine learning dengan Python'
  // };

  // Menampilkan rekomendasi lowongan terbaik
  // console.log('Rekomendasi Lowongan Terbaik:');
  // console.log(`Job ID: ${lowonganTerbaik.job_id}, Judul: ${lowonganTerbaik.title}, Deskripsi: ${lowonganTerbaik.description}`);
};

const compareController = {
  getResult,
};

export default compareController;
