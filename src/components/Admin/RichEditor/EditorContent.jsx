import React from "react";
//
import { ReactComponent as BulletIcon } from "bootstrap-icons/icons/dot.svg";
//
import blog from "../../../data/blog.json";

export default function EditorContent() {
  return (
    <div>
      {/* <textarea
        className="container border-0 block fs-2 fw-bolder my-4"
        rows={2}
        placeholder="Title goes here"
      ></textarea>

      <textarea
        className="container border-0 block"
        rows="20"
        placeholder="Content goes here"
      ></textarea> */}
      <p className="border-0 fs-2 fw-bolder mt-5 mb-2">{blog.title}</p>
      <p className="fs-6 fw-light my-2 text-secondary">{blog.timestamp}</p>
      <div className="my-5"></div>
      <p className="fs-3 fw-bold my-4">{blog.blocks[0].content}</p> {/* H3 */}
      <p className="fs-6 my-2">{blog.blocks[1].content}</p> {/* Normal */}
      <p className="fs-6 fst-italic my-4 mx-5 px-5">
        "{blog.blocks[2].content}"
      </p>{" "}
      {/* Quote */}
      <p className="fs-6 my-2">{blog.blocks[3].content}</p> {/* Normal */}
      <div className="fs-6 my-2">
        {" "}
        {/* Unorderd List */}
        {blog.blocks[4].content.map((data) => {
          return (
            <div className="px-5">
              <BulletIcon />
              {"  "}
              {data}
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        {" "}
        {/* Image */}
        <img src={blog.blocks[5].content} alt="lorem-ipsum" />
      </div>
      <p className="fs-6 my-2">{blog.blocks[6].content}</p>
      {/* <pre>{JSON.stringify(blog, null, 2)}</pre> */}
    </div>
  );
}
