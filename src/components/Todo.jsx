import React from "react";

const Todo = () => {
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <>
      <h1 className="headTitle">ToDo App Using ContextAPI</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your Todo" />
        <button type="submit">ADD</button>
      </form>

      <div className="todo">
        <p>
          Hello Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          quia animi aspernatur quae aliquam quisquam alias dignissimos
          voluptatum deserunt et quidem quas qui reiciendis, laudantium eum
          dolorem commodi dolorum dolor ducimus pariatur quod fugit placeat
          perspiciatis. Optio, molestias similique nostrum tempora consectetur
          quibusdam obcaecati cum accusamus voluptatem nesciunt eum consequatur
          corrupti ipsum facere at. Eligendi aspernatur nobis itaque explicabo
          quod illo recusandae repellat nihil veritatis laudantium, modi
          exercitationem odio fuga qui autem corrupti molestiae. Numquam cum
          dignissimos ipsum placeat voluptatum exercitationem, perferendis quod
          nihil blanditiis dicta, commodi voluptas natus laudantium deserunt
          neque? Commodi sit minima impedit necessitatibus, deserunt
          consequuntur adipisci.
        </p>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </>
  );
};

export default Todo;
