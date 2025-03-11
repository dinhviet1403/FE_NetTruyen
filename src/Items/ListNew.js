import { useNavigate } from "react-router-dom";

const StorySection = ({ stories, Title }) => {
    const navigate = useNavigate();

    const handleClick = (link) => {
      return navigate(link); // Điều hướng đến trang mới
    };

    return (
        <section className="container mt-4">
        <h5 className="fw-bold mb-3">{Title}</h5>
        <div className="table-responsive">
            <table className="table table-striped">
            <tbody>
                {stories.map((story, index) => (
                <tr className="hide-text-line" key={index} onClick={() => handleClick(`/story/${story.id}`)}>
                    <td className="fw-semibold min-w-20">{story.genre}</td>
                    <td>{story.title}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </section>
    );
};

export default StorySection;
