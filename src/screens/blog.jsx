import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TopBlog from "../components/TopBlog";
import Blog1 from "../assets/images/blog1.png";
import Blog4 from "../assets/images/blog4.png";
import Blog2 from "../assets/images/blog2.png";
import Blog3 from "../assets/images/blog3.png";
import Blogfirst from "../assets/images/blogfirst.png";
import profile from '../assets/images/profile.png';
import Moreblogs from '../assets/images/moreblogs.png';
import Moreblogs2 from '../assets/images/moreblogs2.png';
import ma1 from '../assets/images/ma1.png';
import ma2 from '../assets/images/ma2.png';
import ma3 from '../assets/images/ma3.png';
import ma4 from '../assets/images/ma4.png';
import ReadingBlogList from "../components/ReadingBlogList";
import MoreBlogs from "../components/MoreBlogs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight,   } from '@fortawesome/free-solid-svg-icons';
import MarketingArticles from "../components/marketingArticles";
const Blog = () => {
  const blogs = [
    {
      'image': Blog1,
      'name': "UX/UI",
      'index': 1 
    },
    {
        'image': Blog2,
        'name': "React",
        'index': 2 
      },
      {
        'image': Blog3,
        'name': "PHP",
        'index': 3 
      },
      {
        'image': Blog4,
        'name': "Javascript",
        'index': 4 
      }
  ];
  const moreblogs = [
    {
      'image': Moreblogs,
      'title': "AWS Certified solutions Architect",
      'teacherName': "Lina" ,
      'teacher_pic': profile,
      'description':'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      'views':'255,323'
    },
    {
        'image': Moreblogs2,
        'title': "AWS Certified solutions Architect",
        'teacherName': "Lina" ,
        'teacher_pic': profile,
        'description':'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
        'views':'251,232'
      },
    
  ];
  const marketingArticles = [
    {
      'image': ma1,
      'title': "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      'teacherName': "Lina" ,
      'teacher_pic': profile,
      'description':'marketingArticles',
      'duration':'3 Months',
      'type': 'Design',
      'prevPrice':'100',
      'curPrice':'80',
    },
    {
        'image': ma2,
        'title': "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        'teacherName': "Lina" ,
        'teacher_pic': profile,
        'description':'marketingArticles',
        'duration':'3 Months',
      'type': 'Design',
      'prevPrice':'100',
      'curPrice':'80',
      },
      {
        'image': ma3,
        'title': "AWS Certified solutions Architect",
        'teacherName': "Lina" ,
        'teacher_pic': profile,
        'description':'marketingArticles',
        'duration':'3 Months',
        'type': 'Design',
        'prevPrice':'100',
        'curPrice':'80',
      },
      {
          'image': ma4,
          'title': "AWS Certified solutions Architect",
          'teacherName': "Lina" ,
          'teacher_pic': profile,
          'description':'marketingArticles',
          'duration':'3 Months',
        'type': 'Design',
        'prevPrice':'100',
        'curPrice':'80',
        },
    
  ];
  return (
    <>
      <Navbar />
      <TopBlog 
        name="Themadbrains"
        comp="inspiration"
        title="Why Swift UI Should Be on the Radar of Every Mobile Developer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image={Blogfirst}
      />
      <div className="mx-12 my-12">
        <h2 className="font-bold text-2xl">Reading Blog List</h2>
        <div className="flex justify-between">
          {blogs.map(element => (
            <ReadingBlogList
              key={element.index} 
              image={element.image}
              text={element.name}
              id={element.index}
            />
          ))}
        </div>
      </div>
      <div className="px-12 my-12 bg-[#f3f3f3] w-screen">
        <h2 className="font-bold text-2xl ml-4">Related Blogs</h2>
        <div className="grid grid-cols-2" >
          {moreblogs.map(element => (
            <MoreBlogs
              key={element.index} 
              image={element.image}
              text={element.title}
              teacherName={element.teacherName}
              teacherPic= {element.teacher_pic}
              views={element.views}
              description={element.description}
            />
          ))}
        </div>
        <div className="flex justify-end pr-4 pb-2" >
            <button className="bg-[#72eec9] mr-2 p-2 hover:bg-[#56cca9]">   <FontAwesomeIcon icon={faCaretLeft} className="mr-2  text-white" /> </button>
            <button className="bg-[#68ddba] p-2 hover:bg-[#56cca9]"><FontAwesomeIcon icon={faCaretRight} className="mr-2 text-white" /> </button>
        </div>
      </div>
      <div className="mx-12 my-12">
        <div className="flex justify-between">
            <h2 className="font-bold text-2xl">Marketing Articles</h2>
            <a href="#" className='text-[#696984]' style={{ textDecoration: 'none', color: '#696984' }}><u>See More</u> </a>

            </div>
        
        <div className="grid grid-cols-4" >
          {marketingArticles.map(element => (
            <MarketingArticles
              key={element.index} 
              image={element.image}
              text={element.title}
              teacherName={element.teacherName}
              teacherPic= {element.teacher_pic}
              duration={element.duration}
              curPrice={element.curPrice}
              prevPrice={element.prevPrice}
type={element.type}
              description={element.description}
            />
          ))}
        </div>
      
      </div>
      <Footer />
    </>
  );
};

export default Blog;
