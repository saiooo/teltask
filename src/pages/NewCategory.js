import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./../assets/css/Utils.css";
import {
  checkIfNumber,
  makeMaxTierCatList,
  unflatCatList,
  flatCatList,
} from "./../helpers/Helper";
import { addCat } from "./../actions/categories.actions";

const NewCategory = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const categories = useSelector((state) => state.categories);

  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const twoTierCatList = makeMaxTierCatList(unflatCatList(categories), 2);
    const flatTierList = flatCatList(twoTierCatList); // Make it same as we have in reducer

    setAvailableCats(flatTierList);
  }, [categories]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userIDs = data.userId === "null" ? [] : [checkIfNumber(data.userId)];
    const parentCategoryId =
      data.parentCategoryId === "null"
        ? null
        : checkIfNumber(data.parentCategoryId);

    const categoryObj = {
      id: uuidv4(),
      parentCategoryId,
      name: data.name,
      userIDs,
    };

    dispatch(addCat(categoryObj));
  };

  return (
    <>
      <h1>Category creation form</h1>

      <Form noValidate className="mt-20" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Choose user to assign to category (optional)</Form.Label>
          <Form.Select {...register("userId")}>
            <option value="null">---No User---</option>
            {users.map((user) => {
              return (
                <option key={`user-${user.id}`} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Choose parent category (optional)</Form.Label>
          <Form.Select {...register("parentCategoryId")}>
            <option value="null">---Top Level---</option>
            {availableCats.map((cat) => {
              return (
                <option key={`cat-${cat.id}`} value={cat.id}>
                  {cat.name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Enter Category Name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter category name"
            {...register("name", { required: true })}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            Please enter category name.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default NewCategory;
