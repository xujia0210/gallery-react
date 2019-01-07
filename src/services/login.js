import Axios from "../utils/axios";

export default {
  async login(payload) {
    // return await Axios.get()
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            "createTime": "string",
            "errorNumber": 401,
            "errors": "Invalid applicationId",
            "mfaQr": "string",
            "uuid": "string"
          }
        })
      }, 500)
    })
  }
}