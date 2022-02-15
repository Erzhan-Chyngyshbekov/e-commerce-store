import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { storeContext } from "../../contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";

export default function BrandPage() {
  const { id } = useParams();
  const { products, fetchBrandProducts } = useContext(storeContext);

  useEffect(() => {
    fetchBrandProducts(id);
  }, []);

  return <MainLayout></MainLayout>;
}
