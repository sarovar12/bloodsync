import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Samiksha from "../assets/Samikxya.jpg";
import Leela from "../assets/leela.jpg";
import Sarovar from "../assets/Sarovar.jpg";
import Bibek from "../assets/Bibek.jpg";
import Group1 from "../assets/Group1.jpg";
import Image1 from "../assets/1000009858.jpg";
import { Link } from "react-router-dom";

const Project = () => {
  const teamMembers = [
    {
      name: "Bibek Adhikari",
      image: Bibek,
      bio: "Bibek is a recent graduate of Pashchimanchal Campus, Institute of Engineering, Tribhuvan University, specializing in Electronics, Communication, and Information Engineering. He possesses coding experience in frontend web development and a strong desire to explore emerging technologies. Bibek has a keen interest in data science and analytics, as well as a knack for designing IoT-based devices. In his leisure time, he contemplates reading books but often opts for watching movies due to a lack of motivation for extended reading sessions.",
    },
    {
      name: "Leela Saud",
      image: Leela,
      bio: "Leela is a final year student of Bachelor in Computer Science and Information Technology (B.SC.CSIT) studying in Padmakanya Multiple Campus affiliated to Tribhuvan University. Besides programming, she is also passionate about data analytics, keen-observation and in-depth-research. During her leisure hours, she finds solace in spontaneous writing, letting her thoughts flow freely without constraints. She is also an outdoor enthusiast who often goes hiking and exploring new natural places.",
    },
    {
      name: "Samiksha Khadka",
      image: Samiksha,
      bio: "Samiksha Khadka hails from the rural region of Okhaldhunga. She is currently a third-year undergraduate student, majoring in Computer Science at Padma Kanya Multiple Campus. Apart from her proficiency in communication, she excels at listening, therfore you will often find her with the earphones on, enjoying music. Beyond her love for technology, Samiksha holds a deep fascination for policy-making. She is known for infusing Nepali jargon into her casual conversations, adding a unique and local flavor to her interactions.",
    },
    {
      name: "Sarovar Bhandari",
      image: Sarovar,
      bio: "Sarovar is a 3rd year computer science undergrad student studying in Tribhuvan university. Sarovar aspires to create software that is genuinely helpful for everyone. When he is not coding or watching football, you will find him playing a game of chess or exploring nature.",
    },
  ];

  const blogs = [
    {
      title: "Getting Started",
      image: Image1,
      text: "Our week commenced with the successful completion of last week's task related to GIS. Afterward, we dedicated some time to gaining a deeper understanding of APIs. This week was primarily focused on API learning, encompassing repository patterns and DTOs, which were effectively implemented in",
    },
  ];
  return (
    <div>
      <div className="p-5 md:p-20">
        <div className="m-4">
          <a
            href="https://inspireuvic.org/fall2023"
            className="flex gap-2 items-center justify-start leading-4 text-[#3B536D] hover:text-black hover:underline cursor-pointer "
          >
            <MdOutlineKeyboardBackspace /> PROJECTS (FALL 2023)
          </a>
        </div>
        <p className="text-2xl font-medium leading-6 text-[#3B536D] text-center m-4">
          Fall 2023
        </p>
        <div className="flex flex-col gap-8 items-center justify-evenly w-full h-full border-y-2 border-[#3B536D] p-8 m-2">
          <p className="font-bold text-5xl leading-10 text-[#3B536D]">
            BloodSync
          </p>
          <p className="font-bold text-3xl leading-8 text-[#475769]">
            Live blood donation requests and Inventory Management
          </p>
        </div>
        <div className="p-4 text-[#3B536D] leading-10 tracking-normal text-2xl text-justify">
          Nepal's per capita income is very low, with more than 70% of Nepalese
          unable to afford private healthcare. Most healthcare facilities are
          concentrated in urban areas, leaving rural regions lagging behind in
          healthcare development. Rukum, situated in one of the most remote and
          rural areas of Nepal, faces significant challenges in healthcare
          access. Human Development and Community Services (HDCS) operates in
          the health sector in Rukum through Chaurjahari Hospital Rukum (CHR).
          Being located in such a remote area with limited access to modern
          medical advancements, the hospital struggles to change people's
          mentality regarding healthcare. The facility's mission extends beyond
          merely treating the sick; it also aims to encourage local residents to
          seek the care they require. Similarly, blood banking is a significant
          challenge in low-income and middle-income countries like Nepal. The
          issue is even more pronounced in rural areas compared to urban
          regions. Rukum district lacks a blood transfusion center, forcing
          patients and their families to search desperately for donors during
          critical times of need. In addition to the stress of medical
          procedures, patients' relatives must also deal with the added burden
          of sourcing blood. This problem deeply affects the livelihoods of
          people in Rukum and nearby regions. The BloodSync team from Inspire
          Nepal is determined to collaborate in resolving this critical issue.
          Our team intends to leverage the potential of Information Technology
          to address this problem.
        </div>
      </div>
      <div className=" w-full h-fit bg-[#3B536D]  p-5 md:p-20 flex flex-col items-center">
        <p className="text-3xl leading-8 font-semibold text-white text-center">
          {" "}
          OUR STORY{" "}
        </p>
        <p className="p-4 text-white leading-10 tracking-normal text-2xl text-justify">
          Human Development and Community Services (HDCS) is a NGO actively
          engaged in various sectors, including health, education, community
          development, and disaster management. As part of its health
          initiative, HDCS is currently collaborating with three hospitals in
          remote areas, one of which is Chaurjahari Hospital Rukum (CHR). CHR is
          strategically located at the convergence of three districts—Rukum,
          Jajarkot, and Salyan—in the mid-western region of Nepal. The primary
          mission of CHR is to provide high-quality and affordable medical
          services to the underprivileged and marginalized communities residing
          in Rukum and the neighboring districts. The hospital not only focuses
          on healthcare provision but also actively engages in community health
          education and endeavors to drive positive social changes. CHR aims to
          deliver efficient healthcare services at minimal costs to residents of
          remote areas, making it one of the most impactful projects in Rukum.
          However, one pressing issue faced by both the hospital and the entire
          Rukum district is the challenge of blood banking. This issue compels
          patients and their families to undergo desperate searches for blood
          donors during critical moments of need.
        </p>

        <img
          src={Group1}
          alt="group members"
          width="60%"
          className="flex items-center justify-center"
        />

        <p className="p-4 text-white leading-10 tracking-normal text-2xl text-justify">
          In response, our dedicated team,{" "}
          <span className="font-medium text-2xl italic">BloodSync</span>, is
          committed to crafting a technological solution that bridges the divide
          between blood donors and patients. Our primary goal is to devise a
          mechanism that empowers the hospital to efficiently and effectively
          address blood-related issues. Our target audience includes patients in
          remote and underserved areas needing blood transfusions, local
          healthcare providers, Chaurjahari Hospital Rukum (CHR) staff requiring
          timely blood access, and potential blood donors. Our project aims to
          enhance the healthcare system in the region, ensuring quick access to
          life-saving care.
        </p>
      </div>
      <div className="flex flex-col gap-4 m-5 md:mt-20 text-center p-5 w-fit">
        <p className="text-5xl leading-10 tracking-wide text-[#3B536D]">BLOG</p>
        <div className="flex justify-center gap-8">
          {blogs.map((oneBlog) => (
            <div className=" w-1/4 p-5 my-5 flex flex-col gap-2 justify-start items-start border rounded-md">
              <p className="text-xl font-medium leading-6">{oneBlog.title}</p>
              <div className="w-full h-full">
                <img src={oneBlog.image} alt="image of group" />
              </div>
              <div className="w-full h-1/2 text-sm text-justify">
                {oneBlog.text}{" "}
                <Link to="blog">
                  <span className="text-blue-500">Read More..</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 m-5 mt-20 text-center p-5 md:p-20">
        <p className="text-5xl leading-10 tracking-wide text-[#3B536D]">TEAM</p>
        <div className=" flex flex-wrap justify-center gap-20">
          {teamMembers.map((oneMember) => (
            <div key={oneMember.name} className="relative w-80 m-6">
              <img
                src={oneMember.image}
                alt="teamMember"
                className="rounded-3xl"
              />
              <div className=" absolute  -right-10 md:-right-16 -bottom-6 bg-blue-300 flex items-start justify-start h-12 md:h-24 md:w-72 px-10 py-4">
                <p className=" text-lg leading-6">{oneMember.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-4 m-5 mt-12 text-center  p-5 md:px-20">
        <p className="text-5xl leading-10 tracking-wide text-[#3B536D]">
          Who We Are
        </p>
        <div className="flex flex-col gap-3 items-center">
          {teamMembers.map((oneMember) => (
            <div key={oneMember.name} className="flex flex-col gap-2">
              <div className="m-3 p-3 text-center font-bold leading-10 text-3xl text-[#3B536D]">
                {oneMember.name}
              </div>
              <div className="p-4 text-[#3B536D] leading-8 tracking-wide text-2xl text-center">
                {oneMember.bio}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
