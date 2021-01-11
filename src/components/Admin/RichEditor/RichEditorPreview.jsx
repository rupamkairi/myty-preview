import React from "react";
import { useHistory } from "react-router-dom";
//
import { ReactComponent as EditIcon } from "bootstrap-icons/icons/pen-fill.svg";
import { ReactComponent as PublishIcon } from "bootstrap-icons/icons/megaphone-fill.svg";
//
import EditorContent from "./EditorContent";

export default function RichEditorPreview() {
  const history = useHistory();

  const edit = () => {
    history.goBack();
  };

  const publish = () => {
    console.log("Publishing");
  };

  return (
    <div className="container my-5">
      <div className="text-end">
        <button className="btn btn-outline-secondary me-2" onClick={edit}>
          <EditIcon />
          <span className="ps-2">Keep Editing</span>
        </button>
        <button className="btn btn-outline-success" onClick={publish}>
          <PublishIcon />
          <span className="ps-2">Publish</span>
        </button>
      </div>
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
      <EditorContent />
      <div className="text-end my-5">
        <button className="btn btn-outline-success" onClick={publish}>
          <PublishIcon />
          <span className="ps-2">Publish</span>
        </button>
      </div>
    </div>
  );
}
