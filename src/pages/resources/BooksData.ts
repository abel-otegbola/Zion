const AllBooks = {
  christianBooks: [
    {
      title: "Lies of Our Anti-Christian Age",
      author: "Rosaria Butterfield",
      type: "s"
    },
    {
      title: "A Noble Scheme",
      author: "Roseanna M. White",
      type: "h"
    },
    {
      title: "The Seamstress of Acadie: A Novel",
      author: "Laura Frantz",
      type: "s/h"
    },
    {
      title: "Double Take",
      author: "Lynette Eason",
      type: "s"
    },
    
  ],
  faculties: [
    {
      name: "Administration",
      departments: [
        "International Relations",
        "Local Government and Development Studies",
        "Management and Accounting",
        "Public Administration"
      ]
    },
    {
      name: "Agriculture",
      departments: [
        "Agricultural Economics",
        "Animal Sciences",
        "Crop Production and Protection",
        "Family Nutrition and Consumer Studies",
        "Soil Science and Land Management"
      ]
    },
    {
      name: "Arts",
      departments: [
        "African Languages and Literatures",
        "Archaeology and Anthropology",
        "Classical Languages",
        "English Language",
        "Foreign Languages",
        "History",
        "Linguistics and Nigerian Languages",
        "Music",
        "Philosophy",
        "Religious Studies",
        "Theatre Arts"
      ]
    },
    {
      name: "Clinical Sciences",
      departments: [
        "Anaesthesia",
        "Community Health and Nutrition",
        "Dermatology and Venerology",
        "Forensic Medicine",
        "Medicine",
        "Mental Health",
        "Obstetrics, Gynaecology and Perinatology",
        "Ophthalmology",
        "Orthopaedics and Traumatology",
        "Paediatrics and Child Health",
        "Radiology",
        "Surgery"
      ]
    },
    {
      name: "Dentistry",
      departments: [
        "Child Dental Health",
        "Oral and Maxillofacial Surgery and Oral Pathology",
        "Preventive and Community Dentistry",
        "Restorative Dentistry"
      ]
    },
    {
      name: "Education",
      departments: [
        "Counselling and Psychology",
        "Educational Administration and Planning",
        "Educational Foundations",
        "Human Kinetics and Health Education",
        "Language Arts",
        "Sciences",
        "Social Sciences",
        "Vocational and Technical Education"
      ]
    },
    {
      name: "Technology",
      departments: [
        "Agricultural Engineering",
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Science",
        "Electronic and Electrical Engineering",
        "Food Science and Technology",
        "Mechanical Engineering",
        "Material Science and Engineering",
        "Mechatronics Engineering",
        "Mining Engineering",
        "Petroleum Engineering",
        "Software Engineering"
      ]
    },
    {
      name: "Environmental Design and Management",
      departments: [
        "Architecture",
        "Estate Management",
        "Planning",
        "Quantity Surveying",
        "Urban and Regional Planning"
      ]
    },
    {
      name: "Law",
      departments: [
        "Commercial Law",
        "Private Law",
        "Public Law"
      ]
    },
    {
      name: "Pharmacy",
      departments: [
        "Clinical Pharmacy and Pharmacology",
        "Pharmaceutical Administration and Management",
        "Pharmaceutical Chemistry",
        "Pharmaceutics and Pharmacology",
        "Pharmacognosy"
      ]
    },
    {
      name: "Science",
      departments: [
        "Animal Biology",
        "Biochemistry",
        "Botany",
        "Chemistry",
        "Computer Science",
        "Geology",
        "Mathematics",
        "Microbiology",
        "Physics",
        "Plant Science",
        "Statistics",
        "Zoology"
      ]
    },
    {
      name: "Social Sciences",
      departments: [
        "Economics",
        "Geography",
        "Guidance and Counselling",
        "Political Science",
        "Sociology and Anthropology",
        "Social Work"
      ]
    }
  ]
  
};

export default AllBooks;

// Optional: Define types for your data
export type christianBook = {
  title: string;
  author: number | string;
  type: string
};

export type faculty = {
  name: string;
  departments: string[]
}

export type BooksStack = {
  christianBooks: christianBook[];
  faculties: faculty[]
};
