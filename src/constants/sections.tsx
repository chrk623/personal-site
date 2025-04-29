import Link from "next/link";
import type {
  ExperienceItemType,
  ProjectItemType,
  EducationItemType,
  PublicationItemType,
} from "@/types";

export const EDUCATION_DATA: EducationItemType[] = [
  {
    degree: "Doctor of Philosophy - PhD, Statistics",
    institute: "The University of Auckland",
    period: "2020 - Present",
    description: (
      <div className="space-y-2">
        <h5>Research</h5>
        <div className="space-y-2 text-sm">
          <p>
            By using clinical trials (CT), high quality decisions can be made to
            benefit the healthcare systems, but it can often become expensive
            and are prone to failure. With the large amount of clinical data
            from the past, more modern techniques can be applied to gain
            inference. Natural language processing (NLP) techniques are now
            widely used in different areas like grammar induction and
            text-to-speed transformation. However, NLP is not yet mature in the
            CT area. It would be beneficial to include NLP techniques to
            automate certain tasks like processing clinical reports to obtain
            important information and optimizing trial designs. This could
            potentially lower the cost and decrease failure rates substantially.
          </p>
          <div>
            Therefore, we propose to develop:
            <ol className="mt-1">
              <li>NLP algorithms to learn from and process existing trials</li>
              <li>
                algorithms to assess analytical methods to optimize trials
              </li>
              <li>algorithms to facilitate decision</li>
            </ol>
          </div>
        </div>
      </div>
    ),
  },
  {
    degree: "Master of Science - MS, Statistics",
    institute: "The University of Auckland",
    period: "2018 - 2019",
    description: (
      <div className="space-y-2">
        <h5>Research</h5>
        <p className="text-sm">
          In the recent update of{" "}
          <Link href="https://inzight.nz/">iNZight</Link>, a joining and
          reshaping module was introduced. This module provides a tool for users
          to join and reshape data sets. Though it is not difficult to apply
          these operations and obtain the result with a tool like iNZight, there
          is a lack of tutorials or tools that explain the underlying process of
          these operations in an easy to understand manner. In this report, why
          these data operations are useful and important will be discussed.
          Software will also be developed that attempts to teach key concepts
          associated with joining and reshaping data sets through animations.
        </p>
        <p className="text-sm">
          Read more <Link href="https://github.com/chrk623/dataAnim">here</Link>
          .
        </p>
      </div>
    ),
  },
  {
    degree: "Bachelor of Science Honours (BScH), Statistics",
    institute: "The University of Auckland",
    period: "2017 - 2018",
    description: (
      <div className="space-y-2">
        <h5>Research</h5>
        <p className="text-sm">
          Most current software for survey analysis reads the data into memory,
          however, most of these computations can actually be expressed as
          database operations. The aim of this package is to provide a set of
          functions which allows survey statistics to be computed directly
          inside a database. To do this, we used{" "}
          <Link href="https://dplyr.tidyverse.org/">dplyr</Link> and{" "}
          <Link href="https://dbplyr.tidyverse.org/">dbplyr</Link>. Lastly, this
          package takes a step further, it also provides graphics computation
          directly inside a database, where data tables are read into memory
          only when necessary.
        </p>
        <p className="text-sm">
          Read more <Link href="https://github.com/chrk623/svydb">here</Link>.
        </p>
      </div>
    ),
  },
  {
    degree: "Bachelor of Science (B.Sc.), Statistics/Computer Science",
    institute: "The University of Auckland",
    period: "2012 - 2016",
  },
];

export const EXPERIENCE_DATA: ExperienceItemType[] = [
  {
    title: "Developer",
    company: "The University of Auckland",
    companyLink: "https://auckland.ac.nz",
    period: "2023 - Present",
    description: (
      <div className="text-sm leading-relaxed">
        Maintain and develop <Link href="https://inzight.nz">iNZight</Link>{" "}
        Lite, a data analytic tool, and an internal tool for the staff at the{" "}
        <Link href="https://www.cie.auckland.ac.nz/">
          Centre for Innovation and Entrepreneurship
        </Link>{" "}
        to assist with research. My responsibilities include adding new
        features, fixing bugs, ensuring smooth performance, providing assistance
        and support for users and researchers.
      </div>
    ),
    technologies: ["Statistics", "R", "Shiny", "Tidyverse", "Docker"],
  },

  {
    title: "Freelancer",
    period: "2023 - Present",
    description: (
      <div className="space-y-4 leading-relaxed">
        <div>
          <h5 className="font-semibold underline">Developer</h5>
          <p className="text-sm">
            Build robust and scalable applications, handling both front-end and
            back-end development for web applications, as well as developing
            software tools and systems. I’ve previously developed lending
            systems, integrated chatbots, worked on blockchain tools, and
            created interactive data dashboards to assist clients in gaining
            insights from complex data.
          </p>
        </div>

        <div>
          <h5 className="font-semibold underline">Data Scientist</h5>
          <p className="text-sm">
            Offer services ranging from data analysis to data mining, data
            manipulation and webscraping. I help clients extract insights from
            large datasets, employing statistical methods and algorithms. My
            expertise also includes machine learning, where I implement
            predictive models that allow clients to perform classification and
            forecast future trends. I further extend my work into AI, creating
            chatbots, AI agents, and even image detection systems.
          </p>
        </div>

        <div>
          <h5 className="font-semibold underline">Instructor</h5>
          <p className="text-sm">
            Design and deliver introductory courses on AI and Python programming
            in Hong Kong, specifically targeted at primary and secondary school
            students. I also coordinate with fellow instructors to continuously
            improve the course materials and teaching methods, ensuring the best
            learning experience for students.
          </p>
        </div>

        <p className="text-sm underline">Reference up on request.</p>
      </div>
    ),
    technologies: [
      "Python",
      "R",
      "TypeScript",
      "React",
      "Statistics",
      "Machine Learning",
      "Artificial intelligence",
    ],
  },

  {
    title: "Lead Developer",
    company: "Blockchain Startup",
    companyLink: "#",
    period: "2023 - 2024",
    description: (
      <div className="space-y-2 text-sm leading-relaxed">
        <p>
          Development of a high-throughput indexer to collect real-time data
          from <Link href="https://solana.com/">Solana</Link> and{" "}
          <Link href="https://ethereum.org/en/">Ethereum</Link>, and aggregate
          it for specific use cases. Lead the design and implementation of a
          message-broker system (e.g., RabbitMQ) to efficiently handle user
          operations and maintain system performance. Contribute to full-stack
          web development and oversee Docker containerization for the entire
          infrastructure. Manage the design of databases for performance and
          efficiency, ensuring smooth data flow and scalability. As the lead
          developer, play a key role in multiple aspects of the project,
          collaborating across teams to ensure the system&apos;s overall
          efficiency and reliability. Startup reached an approximate $5 million
          USD market cap at its peak.
        </p>
        <p className="underline">Reference up on request.</p>
      </div>
    ),
    technologies: [
      "Blockchain",
      "Python",
      "Golang",
      "Rust",
      "RabbitMQ",
      "TypeScript",
      "React",
      "Docker",
      "PostgreSQL",
    ],
  },

  {
    title: "Research Assistant",
    company: "Various Universities",
    companyLink: "#",
    period: "2017 - 2023",
    description: (
      <div className="text-sm leading-relaxed">
        Worked for several universities, including{" "}
        <Link href="https://www.auckland.ac.nz">
          The University of Auckland
        </Link>
        , <Link href="https://www.syracuse.edu/">Syracuse University</Link> and{" "}
        <Link href="https://twin-cities.umn.edu/">University of Minnesota</Link>
        . My main responsibilities include web scraping, data analysis, data
        mining and machine learning. Notable contributions:
        <ul className="mt-1">
          <li>
            Lucas, David &amp; Bellavitis, Cristiano &amp; Park, U. David.
            (2023).{" "}
            <Link href="https://www.researchgate.net/publication/366850404_A_Cloud's_Silver_Lining_The_Impact_of_Policy_Interventions_on_New_and_Maturing_Technology_Ventures'_Online_Recruitment">
              A Cloud&apos;s Silver Lining? The Impact of Policy Interventions
              on New and Maturing Technology Ventures’ Online Recruitment.
            </Link>{" "}
            Strategic Entrepreneurship Journal.
          </li>

          <li>
            Bellavitis, Cristiano &amp; Cumming, Douglas &amp; Vanacker, Tom.
            (2020).{" "}
            <Link href="https://www.researchgate.net/publication/343856364_Ban_Boom_and_Echo_Entrepreneurship_and_Initial_Coin_Offerings">
              Ban, Boom, and Echo! Entrepreneurship and Initial Coin Offerings.
            </Link>{" "}
            Entrepreneurship Theory and Practice.
          </li>

          <li>
            Bellavitis, Cristiano &amp; Rietveld, Joost &amp; Filatotchev, Igor.
            (2019).{" "}
            <Link href="https://www.researchgate.net/publication/332938942_The_Effects_of_Prior_Co-Investments_On_The_Performance_of_VC_Syndicates_A_Relational_Agency_Perspective">
              The Effects of Prior Co‐Investments On The Performance of VC
              Syndicates: A Relational Agency Perspective.{" "}
            </Link>{" "}
            Strategic Entrepreneurship Journal.
          </li>
        </ul>
      </div>
    ),
    technologies: [
      "Statistics",
      "Machine Learning",
      "Python",
      "R",
      "TypeScript",
      "React",
    ],
  },

  {
    title: "Graduate Teaching Assistant",
    company: "The University of Auckland",
    companyLink: "https://auckland.ac.nz",
    period: "2020 - 2023",
    description: (
      <div className="space-y-2 text-sm leading-relaxed">
        Provide academic assistance to statistics students by teaching tutorials
        for classes involving data analysis, R programming, machine learning,
        and data science, in addition to marking assignments and exams for these
        courses.
      </div>
    ),
    technologies: ["Statistics", "Data Science", "Machine Learning", "R"],
  },

  {
    title: "Teaching Assistant / Marker",
    company: "The University of Auckland",
    companyLink: "https://auckland.ac.nz",
    period: "2017 - 2019",
    description: (
      <div className="space-y-2 text-sm leading-relaxed">
        Provide academic assistance to statistics students by teaching tutorials
        for classes involving SAS programming, data analysis, and R programming,
        as well as marking assignments for these courses.
      </div>
    ),
    technologies: ["Statistics", "R", "SAS"],
  },
];

export const PROJECTS_DATA: ProjectItemType[] = [
  {
    title: "dataAnim",
    description:
      "R package for visualising data transformation using animations.",
    language: "JavaScript",
    link: "https://github.com/chrk623/dataAnim",
    stars: 110,
  },
  {
    title: "svydb",
    description: "Survey statistics in a database",
    language: "R",
    link: "https://github.com/chrk623",
    stars: 12,
  },
];

export const PUBLICATION_DATA: PublicationItemType[] = [
  {
    paperTitle:
      "Batch Aggregation: An Approach to Enhance Text Classification with Correlated Augmented Data",
    year: "2025",
    url: "https://arxiv.org/abs/2504.05020",
    description:
      "A technique which improves text classification by modelling correlation between augmented texts, significantly boosting accuracy in specialized domains when labeled data is limited.",
  },
];
