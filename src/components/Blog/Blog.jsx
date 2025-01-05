import PropTypes from "prop-types";
//props nibo blog ke
const Blog = ({blog}) => {
    // console.log(blog);

    const {title} = blog;
    return (
        <div>
            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};

Blog.PropTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;