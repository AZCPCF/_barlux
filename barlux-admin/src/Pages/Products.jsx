import React, { useEffect, useState } from 'react'
import AddButton from '../Components/AddButton'
import TableCM from '../Components/TableCM'
import { deleteDiscount, getProducts } from '../API/Requests'
import { GenerateProduct, generateProduct } from '../Helpers/functions'
import Loading from '../Components/Loading'
export default function Products() {
  const tableHad = ['نام', 'قیمت' , 'تعداد' , 'نام دسته بندی' , 'تغییر' , 'حذف']
  const [loading,setLoading] = useState(false)
  const [products,setProducts] = useState([])
  const getFunction = async () => {
    setLoading(true)
    const res = await getProducts()
    console.log(res)
    setProducts(res.data.data)
    setLoading(false)
  }
  const [open, setOpen] = useState(false);
  const Close = () => {
    setOpen(false);
  };
  const Open = () => {
    console.log("run");
    setOpen(true);
  };
  const handeT = async (id) => {
  setLoading(true)
  await deleteDiscount(id)
  getFunction()
  setLoading(false)
  }
  useEffect(() => {getFunction()},[])
  return (
    <>
    <Loading isLoading={loading}/>
    <AddButton navigate={'products/add'}/>
    <TableCM tableHead={tableHad} ><GenerateProduct products={products} Close={Close} Open={Open} open={open} onTrue={handeT} /></TableCM>
    </>
  )
}
