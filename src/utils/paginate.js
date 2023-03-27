import _ from "lodash";

export const paginate = (data, pageNum, pageLimit, filter)=>{
    const startIndex = (pageNum - 1 )*pageLimit
    return _(data).slice(startIndex).take(pageLimit).value()
}