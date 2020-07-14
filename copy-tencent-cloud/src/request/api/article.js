import axios from '../http'
import funJson from './classify/cmfAxios'

const article = {
  getMusicList (params) {
    return axios.get(`/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=1&n=30&w=情歌`)
  },
}

export default article
