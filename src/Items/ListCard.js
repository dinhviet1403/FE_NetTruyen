import { useNavigate } from "react-router-dom";

const ListCard = ({stories, Title}) => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    return navigate(link); // Điều hướng đến trang mới
  };

  return (
    <section className="container mt-4">
      <div className="border-bottom border-bottom-1 border-secondary mb-2 p-0">
          <h4 className="fw-bold d-inline-block border-bottom border-bottom-2 border-dark mb-0 pb-2">
            {Title}
          </h4>
        </div>
      <div className="row mt-3 ">
        {stories.map((story, index) => (
          <div key={index} className="col-4 col-md-3 col-lg-2 mb-3 hover-zoom p-2" onClick={() => handleClick(`/story/${story.id}`)}>
            <div className="card border-0">
              <img
                src={story.image}
                className="card-img-top"
                alt={story.title}
                style={{ height: "200px"}}
              />
              <div className="card-body p-2 text-center bg-dark text-white">
                <p className="small">{story.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListCard;
