import BrowseCompanies from '@/components/BrowseCompanies'
// import CategoryBaner from '@/components/CategoryBaner'
import CompaniesCategory from '@/components/CompaniesCategory'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RecommendedCompanies from '@/components/RecommendedCompanies'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <BrowseCompanies />
      <RecommendedCompanies />
      <CompaniesCategory />
      <Footer />
    </div>
  )
}

export default page