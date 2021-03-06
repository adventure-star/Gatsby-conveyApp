import { jsonQuery, query, getLocalToken, generatePagenationParameters } from "./common";

export const getMemberInfoFromLocal = () => {
  const token = getLocalToken();
  const userInfo = token ? token.member : null;
  return userInfo;
}

export async function apiNews(searchParams) {
  return await query(`/news/all/`, {searchParams});
}

export async function apiNewsById(id) {
  return await query(`/news/${id}/`);
}

export async function apiCommentByName(name) {
  return await query(`/comment/${name}/`);
}

export async function apiUpdateNews(id, data) {
  return await jsonQuery(`/news/${id}/`, 'PUT', data);
}

export async function apiNewsCreate(data) {
  const res = await jsonQuery(`/news/create/`, 'POST', data, true);
  return res;
}

export async function apiDeleteNewsById(id) {
  return await jsonQuery(`/news/${id}/`, 'DELETE', {}, true);
}

export async function apiDraftCreate(data) {
  const res = await jsonQuery(`/comment/`, 'POST', data, true);
  return res;
}

export async function apiCommentCreate(data) {
  const res = await jsonQuery(`/comment/`, 'POST', data, true);
  return res;
}

export async function apiGetAllImages() {
  return await query(`/images/all`);
}

export async function apiGetAllVideos() {
  return await query(`/videos/all`);
}

export async function apiGetAllTexts() {
  return await query(`/texts/all`);
}
