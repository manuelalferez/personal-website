import React from "react";
import "./Blog.css";
import PostMini from "./PostMini";

function Blog(props) {
  return (
    <div className="Blog">
      <PostMini
        title="Title1"
        summary={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]}
        date={new Date(2019, 5 - 1, 30)}
        link='https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-05-31'
      />
      <PostMini
        title="Title2"
        summary={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]}
        date={new Date(2019, 5 - 1, 31)}
        link='https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-05-31'
      />
      <PostMini
        title="Title3"
        summary={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]}
        date={new Date(2019, 5 - 1, 24)}
        link='https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-05-31'
      />
      <PostMini
        title="Title1"
        summary={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]}
        date={new Date(2019, 5 - 1, 31)}
        link='https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-05-31'
      />
      <PostMini
        title="Title2"
        summary={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]}
        date={new Date(2019, 5 - 1, 31)}
        link='https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-05-31'
      />
      <PostMini
        title="Title3"
        summary={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]}
        date={new Date(2019, 5 - 1, 31)}
        link='https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-05-31'
      />
      <PostMini
        title="Title1"
        summary={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]}
        date={new Date(2019, 4 - 1, 31)}
        link='https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-05-31'
      />
      <PostMini
        title="Title2"
        summary={[
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]}
        date={new Date(2019, 5 - 1, 31)}
        link='https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-05-31'
      />
    </div>
  );
}

export default Blog;
