import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SubmitCommission = () => {
  return (
    <>
      <section className='w-full m-0 px-5 lg:pl-[320px] flex flex-col min-h-screen justify-center '>
        <div className='bg-white w-full px-2 flex flex-col gap-4 py-4 justify-center items-center rounded-md mx-auto submit_commission_body'>
            <form className='flex flex-col gap-5 w-full '>
                <h3 className='text-xl font-semibold text-center md:text-2xl '>Upload Payment Proof</h3>
                <div className='flex flex-col gap-2'>
                    <Label>Amount</Label>
                    <input type="text" className='w-full flex h-10 rounded-md text-sm px-3 py-2 ring-offset-background border border-input bg-background placeholder:text-muted-foreground ' placeholder='Amount' />
                    
                </div>
                <div className='flex flex-col gap-2'>
                    <Label>Payment Proof Screenshot</Label>
                    <input type="file" className='w-full flex h-10 rounded-md text-sm px-3 py-2 ring-offset-background border border-input bg-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground ' />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor="email">Comment</Label>
                    <textarea rows={7} className='text-[16px] border-[1px] border-stone-300 rounded-sm' />
                </div>

                <button type='submit' className='py-2 w-1/3 bg-[#47986C] text-white text-xl mx-auto font-semibold rounded '>Upload Payment Proof</button>
            </form>
        </div>
      </section>
    </>
  )
}

export default SubmitCommission
