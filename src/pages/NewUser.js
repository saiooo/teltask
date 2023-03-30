import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "./../assets/css/Utils.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "../actions/users.actions";
import { assignUserToCategory } from "../actions/categories.actions";
import { checkIfNumber } from "./../helpers/Helper";
import Alert from "react-bootstrap/Alert";

const NewUser = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const genders = ["male", "female"];

  const onSubmit = (data) => {
    const categoryId =
      data.categoryId === "null" ? null : checkIfNumber(data.categoryId);
    const userId = uuidv4();

    const userObj = {
      id: userId,
      ...data,
    };

    delete userObj.categoryId;

    dispatch(addUser(userObj));
    if (categoryId) {
      dispatch(assignUserToCategory({ categoryId, userId }));
    }

    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 1000);
  };

  return (
    <>
      <h1>User creation form</h1>

      {isAlertVisible && (
        <Alert variant="success">User added successfully!</Alert>
      )}

      <Form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>
            Your name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: true, minLength: 3 })}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name && errors.name.type === "required"
              ? "Please enter user name."
              : "Your user name must be at least 3 characters long."}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your last name (optional)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            {...register("lastName")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Email address <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", { required: true })}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email &&
              errors.email.type === "required" &&
              "Please enter your email."}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Age <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            {...register("age", { required: true })}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age &&
              errors.age.type === "required" &&
              "Please enter your age."}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Select your gender <span className="text-danger">*</span>
          </Form.Label>
          <Form.Select {...register("gender")}>
            {genders.map((gen) => {
              return <option key={gen}>{gen}</option>;
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Choose your category (optional)</Form.Label>
          <Form.Select {...register("categoryId")}>
            <option value="null">---No category---</option>
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

export default NewUser;
