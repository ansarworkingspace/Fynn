"use server"

import { onCurrentUser } from "../user"
import { createAutomation } from "./query"

export const getAllAtomations = async ()=>{
  const user = await onCurrentUser()

  try {
    const create = await createAutomation(user.id)
    if(create) return {status:200,data:'Automation created'}
    return {status:404,data:'Oops! something went wrong'}
  } catch (error) {
    console.log(error);
    return {status:500, data:"Internal server error"}
  }
}