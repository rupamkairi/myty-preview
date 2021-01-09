import React from "react";
import { useHistory } from "react-router-dom";
import "./RichEditor.css";
//
import { ReactComponent as PreviewIcon } from "bootstrap-icons/icons/eye-fill.svg";
//
import { ReactComponent as TypeIcon } from "bootstrap-icons/icons/type.svg";
import { ReactComponent as H1Icon } from "bootstrap-icons/icons/type-h1.svg";
import { ReactComponent as H2Icon } from "bootstrap-icons/icons/type-h2.svg";
import { ReactComponent as H3Icon } from "bootstrap-icons/icons/type-h3.svg";
//
import { ReactComponent as QuoteIcon } from "bootstrap-icons/icons/blockquote-left.svg";
import { ReactComponent as LinkIcon } from "bootstrap-icons/icons/link-45deg.svg";
import { ReactComponent as ULIcon } from "bootstrap-icons/icons/list-ul.svg";
import { ReactComponent as OLIcon } from "bootstrap-icons/icons/list-ol.svg";
//
import { ReactComponent as BoldIcon } from "bootstrap-icons/icons/type-bold.svg";
import { ReactComponent as ItalicsIcon } from "bootstrap-icons/icons/type-italic.svg";
import { ReactComponent as UnderlineIcon } from "bootstrap-icons/icons/type-underline.svg";
import { ReactComponent as StrikethroughIcon } from "bootstrap-icons/icons/type-strikethrough.svg";
import { ReactComponent as CodeIcon } from "bootstrap-icons/icons/code-slash.svg";
import { ReactComponent as ParagraphIcon } from "bootstrap-icons/icons/paragraph.svg";
import { ReactComponent as ColorIcon } from "bootstrap-icons/icons/palette.svg";
//
import { ReactComponent as ImageIcon } from "bootstrap-icons/icons/images.svg";
import { ReactComponent as VideoIcon } from "bootstrap-icons/icons/camera-video.svg";

export default function RichEditor() {
  const history = useHistory();

  const preview = () => {
    history.push("/admin/editor/preview");
  };

  return (
    <div className="container my-5">
      <div className="text-end">
        <button className="btn btn-outline-primary" onClick={preview}>
          <PreviewIcon />
          <span className="ps-2">Preview</span>
        </button>
      </div>
      <textarea
        className="container border-0 block fs-2 fw-bolder my-4"
        rows={2}
        placeholder="Title goes here"
      ></textarea>
      <div className="border bg-white rounded p-2 my-4 d-flex sticky-top">
        <div className="d-flex flex-grow-1 justify-content-start flex-wrap">
          <div className="btn-group px-1">
            <button className="block-control">
              <TypeIcon className="mid-icon" />
            </button>
            <button className="block-control">
              <H1Icon className="mid-icon" />
            </button>
            <button className="block-control">
              <H2Icon className="mid-icon" />
            </button>
            <button className="block-control">
              <H3Icon className="mid-icon" />
            </button>
          </div>
          <div className="btn-group px-1">
            <button className="block-control">
              <QuoteIcon className="mid-icon" />
            </button>
            <button className="block-control">
              <LinkIcon className="mid-icon" />
            </button>
            <button className="block-control">
              <ULIcon className="mid-icon" />
            </button>
            <button className="block-control">
              <OLIcon className="mid-icon" />
            </button>
          </div>
          <div className="btn-group px-1">
            <button className="block-control">
              <BoldIcon className="mid-icon" />
            </button>
            <button className="block-control">
              <ItalicsIcon className="mid-icon" />
            </button>
            <button className="block-control">
              <UnderlineIcon className="mid-icon" />
            </button>
            <button className="block-control">
              <StrikethroughIcon className="mid-icon" />
            </button>
            <button className="block-control">
              <CodeIcon className="mid-icon" />
            </button>
            <button className="block-control">
              <ParagraphIcon className="mid-icon" />
            </button>
            <button className="block-control">
              <ColorIcon className="mid-icon" />
            </button>
          </div>
          <div className="btn-group px-1">
            <button className="block-control">
              <ImageIcon className="mid-icon" />
            </button>
            <button className="block-control">
              <VideoIcon className="mid-icon" />
            </button>
          </div>
        </div>
      </div>
      <textarea
        className="container border-0 block"
        rows="20"
        placeholder="Content goes here"
      ></textarea>
      <div className="text-end my-5">
        <button className="btn btn-outline-primary" onClick={preview}>
          <PreviewIcon />
          <span className="ps-2">Preview</span>
        </button>
      </div>
    </div>
  );
}
