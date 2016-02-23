/**
 * Created by wmj on 2016/2/22.
 */

import {UNDO,REDO} from 'constant/action_types'
export function undo(){

    return {
        type:UNDO
    }
}

export function redo(){

    return {
        type:REDO
    }
}