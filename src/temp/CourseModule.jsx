import React from "react";
import { FaChevronDown, FaPlayCircle } from "react-icons/fa";

const modulesData = [
  {
    id: 1,
    title: "Module 1: Introduction to Design Thinking (4 Lessons)",
    duration: "60 Minutes",
    lessons: [
      { title: "What is Design Thinking?", time: "15 mins" },
      { title: "History & Evolution of Design Thinking", time: "10 mins" },
      { title: "The 5-Stage Design Thinking Model", time: "20 mins" },
      { title: "Why Empathy Matters in UX", time: "10 mins" },
    ],
  },
  {
    id: 2,
    title: "Module 2: Empathize – Understanding Your Users (10 Lessons)",
    duration: "170 Minutes",
    lessons: [
      { title: "What is User Empathy?", time: "15 mins" },
      { title: "How to Conduct User Interviews", time: "20 mins" },
      { title: "Building Empathy Maps", time: "05 mins" },
      { title: "Observational Research Techniques", time: "20 mins" },
      { title: "Creating Stakeholder Maps", time: "10 mins" },
      { title: "Introduction to User Personas", time: "15 mins" },
      { title: "Active Listening Skills", time: "15 mins" },
      { title: "Real-World Empathy Case Study", time: "20 mins" },
      { title: "Assignment: Empathize Your Audience", time: "20 mins" },
    ],
  },
  {
    id: 3,
    title: "Module 3: Define – Clarifying User Needs (9 Lessons)",
    duration: "145 Minutes",
    lessons: [
      { title: "Synthesizing Empathy Data", time: "20 mins" },
      { title: "Identifying Pain Point", time: "15 mins" },
      { title: "Problem Framing Techniques", time: "15 mins" },
      { title: "Creating Effective Problem Statements", time: "15 mins" },
      { title: "The 'How Might We' Framework", time: "15 mins" },
      { title: "Prioritizing User Needs", time: "15 mins" },
      { title: "Goal Alignment with Stakeholders", time: "15 mins" },
      { title: "Define Phase Real-world Example", time: "15 mins" },
      { title: "Assignment: Write Your HMW Questions", time: "15 mins" },
    ],
  },
  {
    id: 4,
    title: "Module 4: Ideate – Brainstorming Creative Solutions (7 Lessons)",
    duration: "115 Minutes",
    lessons: [
      { title: "What is Ideation?", time: "15 mins" },
      { title: "Brainstorming Rules & Setup", time: "15 mins" },
      { title: "SCAMPER Method Explained", time: "20 mins" },
      { title: "Crazy 8s & Rapid Sketching", time: "15 mins" },
      { title: "Affinity Diagramming", time: "15 mins" },
      { title: "Selecting the Right Ideas", time: "15 mins" },
      { title: "Assignment: Host Your Own Ideation Session", time: "20 mins" },
    ],
  },
  {
    id: 5,
    title: "Module 5: Prototype – Designing Simple Models (8 Lessons)",
    duration: "160 Minutes",
    lessons: [
      { title: "Why Prototyping is Important", time: "20 mins" },
      { title: "Low-fidelity vs High-fidelity Prototypes", time: "15 mins" },
      { title: "Paper Prototyping Techniques", time: "15 mins" },
      { title: "Using Figma for Wireframes", time: "15 mins" },
      { title: "Designing Interactions", time: "15 mins" },
      { title: "Feedback-First Prototyping", time: "15 mins" },
      { title: "Prototyping Tools Overview", time: "15 mins" },
      { title: "Assignment: Build Your First Wireframe", time: "25 mins" },
    ],
  },
  {
    id: 6,
    title: "Module 6: Final Project & Certification (8 Lessons)",
    duration: "190 Minutes",
    lessons: [
      { title: "Final Brief Introduction", time: "20 mins" },
      { title: "Research Planning & Goal Setting", time: "15 mins" },
      { title: "Create Your Persona", time: "35 mins" },
      { title: "Build Wireframes for Final Project", time: "35 mins" },
      { title: "Test & Record User Feedback", time: "45 mins" },
      { title: "Document Case Study for Certification", time: "25 mins" },
      { title: "Final Presentation Submission", time: "25 mins" },
      { title: "Course Completion & Certificate Unlock", time: "20 mins" },
    ],
  },
];

const CourseModule = () => {
  return (
    <section className="max-w-xl mx-32 bg-white border rounded-md my-10 overflow-hidden">
      {modulesData.map((module) => (
        <div key={module.id} className="border-b last:border-b-0">
          {/* Header */}
          <div className="flex justify-between items-center bg-gray-100 px-4 py-3">
            <h3 className="font-semibold text-gray-800 text-[13px] sm:text-[14px]">
              {module.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="font-medium">{module.duration}</span>
              <FaChevronDown className="text-gray-500 text-xs" />
            </div>
          </div>

          {/* Lessons (always visible) */}
          <div className="px-5 py-2 bg-white text-gray-700 text-sm">
            {module.lessons.map((lesson, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b last:border-none py-2"
              >
                <div className="flex items-center gap-2">
                  <FaPlayCircle className="text-gray-400 text-xs" />
                  <span className="text-[13px]">{lesson.title}</span>
                </div>
                <span className="text-gray-500 text-[13px]">{lesson.time}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default CourseModule;
