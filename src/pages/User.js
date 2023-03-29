import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "./../assets/css/Utils.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "./../actions/users.actions";
import { assignUserToCategory } from "./../actions/categories.actions";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    console.log("render new");
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const genders = ["male", "female"];

  const onSubmit = (data) => {
    const categoryId = data.categoryId;
    const userId = uuidv4();

    const userObj = {
      id: userId,
      ...data,
    };

    delete userObj.categoryId;

    dispatch(addUser(userObj));
  };

  return (
    <>
      <h1>User creation form</h1>

      <Form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            {...register("lastName")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            {...register("age")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select your category gender</Form.Label>
          <Form.Select {...register("gender")}>
            {genders.map((gen) => {
              return <option key={gen}>{gen}</option>;
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Choose your category</Form.Label>
          <Form.Select {...register("categoryId")}>
            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default User;
