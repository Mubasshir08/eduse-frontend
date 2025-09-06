import React from "react";
import Cardvido from "../assets/video/v1.mp4";
import Cardvidtwo from "../assets/video/v2.mp4";
import Cardvidthre from "../assets/video/v3.mp4";
import Cardvidfo from "../assets/video/v4.mp4";
import Cardvidfit from "../assets/video/v5.mp4";
import Cardvidsix from "../assets/video/v6.mp4";
import Cardvidseven from "../assets/video/v7.mp4";
import Cardvieight from "../assets/video/v8.mp4";
import Cardvidnine from "../assets/video/v9.mp4";
import Footer from "../shraed/Footer";

const Blog = () => {
  return (
    <div>
      <section className="font-inter text-[16px]">
        <div className=" align-middle bg-[#015AD8] h-14 text-white flex items-center justify-center my-5">
          <h1 className="text-[40px] font-bold text-center my-10">Eduse Blog</h1>
        </div>
        <div className="px-20 grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 sm:grid-cols-1 gap-10 mb-10">
          {/* card-1 start */}
          <div class="card bg-base-100 w-96 shadow-md  rounded-b-md">
            <figure>
              {/* video */}
              <video
                controls
                src={Cardvido}
                type="video/mp4"
                className="rounded-t-md"
              />
            </figure>
            <div className="p-2">
              <div div class="card-body">
                <h2 class=" font-bold text-xl">
                  Why E-Learning Is the Future of Education
                </h2>
                <a href="#">
                  <p className=" text-blue-500 hover:text-blue-600  ">
                    e-learning-future-of-education
                  </p>
                </a>
                <p className="mb-2">
                  Traditional classrooms are evolving. With the rise of digital
                  platforms, e-learning is no longer just an option—it’s the
                  future.....
                  <a href="#">
                    <span className="underline underline-offset-1 text-blue-500 hover:text-blue-600  ">
                      {" "}
                      Read More
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* card-1 end */}

          {/* card-2 Start */}
          <div class="card bg-base-100 w-96 shadow-md rounded-b-md">
            <figure>
              {/* video */}
              <video
                controls
                src={Cardvidtwo}
                type="video/mp4"
                className="rounded-t-md"
              />
            </figure>
            <div className="p-2">
              <div div class="card-body">
                <h2 class=" font-bold text-xl">
                  How Student-to-Student E-Commerce Builds Real Business Skills
                </h2>
                <a href="#">
                  <p className=" text-blue-500 hover:text-blue-600  ">
                    student-ecommerce-real-business-skills
                  </p>
                </a>
                <p className="mb-2">
                  Forget theory—Eduse lets students dive into real-world
                  entrepreneurship by buying and selling within a secure digital
                  marketplace built just for them......
                  <a href="#">
                    <span className="underline underline-offset-1 text-blue-500 hover:text-blue-600  ">
                      {" "}
                      Read More
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* 2nd card end */}

          {/* 3rd card start */}

          <div class="card bg-base-100 w-96 shadow-md rounded-b-md">
            <figure>
              {/* video */}
              <video
                controls
                src={Cardvidthre}
                type="video/mp4"
                className="rounded-t-md"
              />
            </figure>
            <div className="p-2">
              <div div class="card-body">
                <h2 class=" font-bold text-xl">
                  Top 5 In-Demand Skills You Can Learn Online with Eduse
                </h2>
                <a href="#">
                  <p className=" text-blue-500 hover:text-blue-600  ">
                    e-learning-future-of-education
                  </p>
                </a>
                <p className="mb-2">
                  Want to stay ahead in today’s job market? These five skills
                  are in demand, and you can master them all through Eduse’s
                  certified courses......
                  <a href="#">
                    <span className="underline underline-offset-1 text-blue-500 hover:text-blue-600  ">
                      {" "}
                      Read More
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 3rd card end */}

          {/* 4th card start */}

          <div class="card bg-base-100 w-96 shadow-md rounded-b-md ">
            <figure>
              {/* video */}
              <video
                controls
                src={Cardvidfo}
                type="video/mp4"
                className="rounded-t-md"
              />
            </figure>
            <div className="p-2">
              <div div class="card-body">
                <h2 class=" font-bold text-xl">
                  Top 5 In-Demand Skills You Can Learn Online with Eduse
                </h2>
                <a href="#">
                  <p className=" text-blue-500 hover:text-blue-600  ">
                    e-learning-future-of-education
                  </p>
                </a>
                <p className="mb-2">
                  Want to stay ahead in today’s job market? These five skills
                  are in demand, and you can master them all through Eduse’s
                  certified courses......
                  <a href="#">
                    <span className="underline underline-offset-1 text-blue-500 hover:text-blue-600  ">
                      {" "}
                      Read More
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 4th card end */}

          {/* 5th card start */}

          <div class="card bg-base-100 w-96 shadow-md rounded-b-md ">
            <figure>
              {/* video */}
              <video
                controls
                src={Cardvidfit}
                type="video/mp4"
                className="rounded-t-md"
              />
            </figure>
            <div className="p-2">
              <div div class="card-body">
                <h2 class=" font-bold text-xl">
                  What Makes Eduse Different from Other Online Learning
                  Platforms?
                </h2>
                <a href="#">
                  <p className=" text-blue-500 hover:text-blue-600  ">
                    why-choose-eduse-unique-benefits
                  </p>
                </a>
                <p className="mb-2">
                  Eduse isn't just another e-learning site—it’s a
                  student-centered community. Here’s why learners and sellers
                  are switching to Eduse.......
                  <a href="#">
                    <span className="underline underline-offset-1 text-blue-500 hover:text-blue-600  ">
                      {" "}
                      Read More
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 5th card end */}

          {/* 6th card start */}

          <div class="card bg-base-100 w-96 shadow-md rounded-b-md ">
            <figure>
              {/* video */}
              <video
                controls
                src={Cardvidsix}
                type="video/mp4"
                className="rounded-t-md"
              />
            </figure>
            <div className="p-2">
              <div div class="card-body">
                <h2 class=" font-bold text-xl">
                  From Campus to Career – How Eduse Bridges the Gap
                </h2>
                <a href="#">
                  <p className=" text-blue-500 hover:text-blue-600  ">
                    campus-to-career-with-eduse
                  </p>
                </a>
                <p className="mb-2">
                  Are you graduating soon but feel unprepared for the job
                  market? Eduse equips you with real-world skills that companies
                  actually care about.......
                  <a href="#">
                    <span className="underline underline-offset-1 text-blue-500 hover:text-blue-600  ">
                      {" "}
                      Read More
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 6th card end */}
          {/* 7th card start */}

          <div class="card bg-base-100 w-96 shadow-md rounded-b-md ">
            <figure>
              {/* video */}
              <video
                controls
                src={Cardvidseven}
                type="video/mp4"
                className="rounded-t-md"
              />
            </figure>
            <div className="p-2">
              <div div class="card-body">
                <h2 class=" font-bold text-xl">
                  10 Creative Product Ideas You Can Sell as a Student
                </h2>
                <a href="#">
                  <p className=" text-blue-500 hover:text-blue-600  ">
                    student-product-ideas-to-sell-online
                  </p>
                </a>
                <p className="mb-2">
                  Want to start earning but don’t know what to sell? Here are 10
                  simple yet powerful product ideas perfect for students to sell
                  on Eduse Marketplace......
                  <a href="#">
                    <span className="underline underline-offset-1 text-blue-500 hover:text-blue-600  ">
                      {" "}
                      Read More
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 7th card end */}

          {/* 8th card start */}

          <div class="card bg-base-100 w-96 shadow-md rounded-b-md ">
            <figure>
              {/* video */}
              <video
                controls
                src={Cardvieight}
                type="video/mp4"
                className="rounded-t-md"
              />
            </figure>
            <div className="p-2">
              <div div class="card-body">
                <h2 class=" font-bold text-xl">
                  Learn at Your Pace, In Your Language The Eduse Advantage
                </h2>
                <a href="#">
                  <p className=" text-blue-500 hover:text-blue-600  ">
                    learn-in-your-language-eduse-benefits
                  </p>
                </a>
                <p className="mb-2">
                  Language shouldn’t be a barrier to learning. Eduse offers
                  multilingual content to ensure that every student feels
                  confident and included.......
                  <a href="#">
                    <span className="underline underline-offset-1 text-blue-500 hover:text-blue-600  ">
                      {" "}
                      Read More
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 8th card end */}

          {/* 9th card start */}

          <div class="card bg-base-100 w-96 shadow-md rounded-b-md ">
            <figure>
              {/* video */}
              <video
                controls
                src={Cardvidnine}
                type="video/mp4"
                className="rounded-t-md"
              />
            </figure>
            <div className="p-2">
              <div div class="card-body">
                <h2 class=" font-bold text-xl">
                  Microlearning – Small Steps, Big Results
                </h2>
                <a href="#">
                  <p className=" text-blue-500 hover:text-blue-600  ">
                    microlearning-eduse-benefits
                  </p>
                </a>
                <p className="mb-2">
                  Busy schedule? No problem. With Eduse’s microlearning format,
                  you can master a new skill in just 10 minutes a day.......
                  <a href="#">
                    <span className="underline underline-offset-1 text-blue-500 hover:text-blue-600  ">
                      {" "}
                      Read More
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 9th card end */}
        </div>
        {/* footer */}
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Blog;
