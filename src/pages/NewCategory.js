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

  //formState: { errors },

  useEffect(() => {
    const twoTierCatList = makeMaxTierCatList(unflatCatList(categories), 2);
    const flatTierList = flatCatList(twoTierCatList); // Make it same as we have in reducer

    setAvailableCats(flatTierList);
  }, [categories]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const userId = checkIfNumber(data.userId);
    const parentCategoryId = data.parentCategoryId
      ? checkIfNumber(data.parentCategoryId)
      : null;

    const categoryObj = {
      id: uuidv4(),
      parentCategoryId,
      name: data.name,
      userIDs: [userId],
    };

    dispatch(addCat(categoryObj));
  };

  return (
    <>
      <h1>Category creation form</h1>

      <Form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Choose user to assign to category</Form.Label>
          <Form.Select {...register("userId")}>
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
          <Form.Label>Enter Category Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category name"
            {...register("name")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default NewCategory;
