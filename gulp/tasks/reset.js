/*import del from "del";
export const resert = () => {
    return del(app.path.clean);
}*/

import {deleteAsync} from "del"
export const reset = () => {
    return deleteAsync(['dist'])
}

