import React from 'react'

 function About() {
  return (
    // <div className='about '>

    //     <div className="about_content">
    //       <div className="about_title">
    //         <h1>Men Haqimda Malumot</h1>
    //       </div>
    //       <h1 className='about_pasd'>Frontend Dasturchi</h1>
    //       <h1 className='about_malu'>Tugulgan Kun: <p className='about_atve'>26 Noyabr 2004 Yil</p></h1>
    //       <h1 className='about_malu'>Telefon: <p className='about_atve'>+998 99 105 43 13</p></h1>
    //       <h1 className='about_malu'>Shaxar: <p className='about_atve'>Horazm Urganch</p></h1>
    //       <h1 className='about_malu'>Yosh: <p className='about_atve'>18</p></h1>
    //       <p className='about_lorem'>Xozirda Urganch Shaxri URDU Universitetda Kompyuter Dasturlash <br /> Va Fizik assoslari boyicha 2 Kurs Talabasiman 17 Yoshimda <br /> Urgannch Shaxri Data Learing Center Oquv <br /> Markazida Frontend Dasturlash boyicha 6 Oylik Oquv <br /> Kursini Btrganman va Sertefikat qolga kritganman <br /> Bosh vahtimda Frontend boyicha Praktika qlaman. </p>
         
    //         <h1 className='about_skill-h1'>Skills</h1>

    //       <div className="about_skills">
    //         <div className="about_skills-pri">
    //           <h1 className='about_skills-title'>HTML</h1>
    //           <svg className='svg'>
    //             <circle class="bg" cx="57" cy="57" r="52" />
    //             <circle class="meter-1" cx="57" cy="57" r="52" />
    //           </svg>
    //           <p className='about_skills-p'>80%</p>
    //         </div>

    //         <div className="about_skills-pri">
    //         <h1 className='about_skills-title'>CSS, SCSS</h1>
    //           <svg className='svg'>
    //             <circle class="bg" cx="57" cy="57" r="52" />
    //             <circle class="meter-2" cx="57" cy="57" r="52" />
    //           </svg>
    //           <p className='about_skills-p'>65%</p>
    //         </div>

    //         <div className="about_skills-pri">
    //           <h1 className='about_skills-title'>React JS</h1>
    //           <svg className='svg'>
    //             <circle class="bg" cx="57" cy="57" r="52" />
    //             <circle class="meter-3" cx="57" cy="57" r="52" />
    //           </svg>
    //           <p className='about_skills-p'>40%</p>
    //         </div>

    //       </div>
    //     </div>
    //   <div className="about_img"></div>
    // </div>


    <div className="about">
        <div className="about_content">
          <div className="about_content-img">
            <img src="./img/about-img.JPEG" alt="Me Img" />
          </div>

          <div className="about_content-content">
              <h1 className='about_pasd'>Frontend Dasturchi:</h1>
              <h1 className='about_malu'>Familiya Isim: <p className='about_atve'>Qurbonboyev Farid</p></h1>
              <h1 className='about_malu'>Tugulgan Kun: <p className='about_atve'>26 Noyabr 2004 Yil</p></h1>
              <h1 className='about_malu'>Ish Tajriba: <p className='about_atve'>1 yil praktika</p></h1>
              <h1 className='about_malu'>Telefon: <p className='about_atve'>+998 99 105 43 13</p></h1>
              <h1 className='about_malu'>Shaxar: <p className='about_atve'>Horazm Urganch</p></h1>
              <h1 className='about_malu'>Yosh: <p className='about_atve'>18</p></h1>
          </div>
        </div>

        <div className="about_skills">
          <div class="skills">  
            <li>
              <h1 className='skills_name'>HTML</h1><span class="bar"><span class="html"></span></span>  
            </li>

            <li>
              <h1 className='skills_name'>SCSS CSS</h1><span class="bar"><span class="css"></span></span>
            </li>

            <li>
              <h1 className='skills_name'>JAVASCRIPT</h1><span class="bar"><span class="javascript"></span></span>
            </li>

            <li>
              <h1 className='skills_name'>REACT JS</h1><span class="bar"><span class="jquery"></span></span>
            </li>
          </div>
        </div>
    </div>
  )
}

export default About