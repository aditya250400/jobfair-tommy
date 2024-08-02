import { Gender } from "@prisma/client";
import { z } from "zod";

const register = z.object({
  name: z.string().min(1),
  username: z.string().min(1),
  password: z.string().min(8),
  phone: z.string().min(12),
});

const login = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

const resumeProfile = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  email: z.string().email().min(1),
  gender: z.enum(["male", "female"]),
  phone: z.string().min(1),
  birth_date: z.string().date(),
  social_media: z.array(z.string()),
  desc: z.string().min(1),
});

const resumeWorkExperience = z.object({
  WorkExpItem: z.array(
    z.optional(
      z.object({
        name: z.string().min(1),
        position: z.string().min(1),
        start_at: z.string().date(),
        end_at: z.string().date(),
        address: z.string().min(1),
        desc: z.array(z.string())
      })
    )
  ),
});

const resumeEducation = z.object({
  educationItems: z.array(
    z.optional(
      z.object({
        name: z.string().min(1),
        degree: z.string().min(1),
        major: z.string().min(1),
        address: z.string().min(1),
        start_at: z.string().date(),
        end_at: z.string().date(),
        grade: z.coerce.number(),
        desc: z.optional(z.string().min(1)),
      })
    )
  ),
});

const resumeSkill = z.object({
  skillItems: z.array(
    z.optional(
      z.object({
        name: z.string().min(1),
        skill: z.array(z.string()),
      })
    )
  ),
});

const resumeAchievement = z.object({
  achievementItems: z.array(
    z.optional(
      z.object({
        name: z.string().min(1),
        provider: z.string().min(1),
        year: z.string().min(4),
      })
    )
  ),
});

const resumeExperience = z.object({
    experienceItems: z.array(
        z.optional(
            z.object({
                name: z.string().min(1),
                description: z.string().min(1)
            })
        )
    )
})

const company = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  desc: z.string().min(1),
  social_media: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(12),
  locationStand: z.string().min(1)
})

const requirement = z.object({
  min_age: z.coerce.number().min(1),
  max_age: z.coerce.number().min(2),
  gender: z.array(z.enum(["male", "female"])),
  position: z.string().min(1),
  desc_job: z.array(z.string()),
  skill: z.array(z.string()),
  keyword: z.array(z.string())
})

const requirementEducation = z.object({
  educationItems: z.array(z.object({
    degree: z.string().min(1),
    major: z.array(z.string()),
    grade: z.coerce.number()
  }))
})

const formSchema = {
  register,
  login,
  resumeProfile,
  resumeAchievement,
  resumeEducation,
  resumeSkill,
  resumeWorkExperience,
  resumeExperience,
  company,
  requirement,
  requirementEducation
};

export default formSchema;
