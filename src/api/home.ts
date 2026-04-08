import http from "@/lib/http";
import * as Interfaces from "@/interfaces"

export const submitCustomerContractData = http.post<Interfaces.SubmitCustomerContractDataParams>('/home/biz-contacts')