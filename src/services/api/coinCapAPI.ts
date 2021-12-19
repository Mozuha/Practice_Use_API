import axios from 'axios'

export const getAllCoinCapData = async (url: string): Promise<any> => {
  // return new Promise((resolve, reject) => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       resolve(data)
  //     })
  // })

  return axios
    .get(url)
    .then(res => res.data)
    .catch(err => {
      console.log('This is an error message: ', err)
      return null
    })
}