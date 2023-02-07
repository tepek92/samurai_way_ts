import axios from "axios";
import {UpdateUserType} from "../redux/profileReducer";


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '20e7389f-479c-4b8d-a9f1-c09cf3d4ffb9'
  }
});


export const usersAPI = {
  getUsers(page: number, pageSize: number) {
    return instance.get(`users?page=${page}&count=${pageSize}`)
      .then(response => response.data)
  }
}


export const followAPI = {
  getFollow(userId: number) {
    return instance.get(`follow/${userId}`)
      .then(response => response.data)
  },
  postFollow(userId: number) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data)
  },
  deleteFollow(userId: number) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data)
  }
}

export const authAPI = {
  getAuthMe() {
    return instance.get(`auth/me`)
      .then(response => response.data);
  },
  setLoginMe(email: string, password: string, rememberMe: boolean, captcha: string | null) {
    return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
      .then(response => response.data);
  },
  deleteLoginMe() {
    return instance.delete(`/auth/login`)
      .then(response => response.data);
  },

}

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data)
  },
  getUserStatus(userId: string) {
    return instance.get(`profile/status/${userId}`)
      .then(response => response.data)
  },
  updateUserStatus(status: string) {
    return instance.put(`profile/status/`, {status})
      .then(response => response.data)
  },
  updateUserPhoto(photo: File) {
    let formData = new FormData();
    formData.append("image", photo);

    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      }
    }).then(response => response.data)
  },
  updateUserProfile(data: UpdateUserType) {
    return instance.put(`profile`, data)
      .then(response => response.data)
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url')
      .then(response => response.data)
  }
}
