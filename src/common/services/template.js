import axios from "axios";
import { TEMPLATE_URLS } from "../constants/apiUrls";

export const Get_Template = async () => {
  const res = await axios.get(TEMPLATE_URLS.GET_TEMPLATE);
  return res;
};
export const Post_Template = async ({ prop1, prop2, prop3 }) => {
  const res = await axios.post(TEMPLATE_URLS.POST_TEMPLATE, {
    prop1,
    prop2,
    prop3,
  });
  return res;
};
export const Patch_Template = async ({ prop1, prop2, prop3 }) => {
  const res = await axios.patch(TEMPLATE_URLS.PATCH_TEMPLATE, {
    prop1,
    prop2,
    prop3,
  });
  return res;
};
export const Delete_Template = async ({ prop1 }) => {
  const res = await axios.delete(TEMPLATE_URLS.DELETE_TEMPLATE, {
    data: { prop1 },
  });
  return res;
};
