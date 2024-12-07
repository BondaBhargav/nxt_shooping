import { useState } from 'react' // Added for state management in functional component
import { BsSearch } from 'react-icons/bs'
import './index.css'

const FilterTheProducts = ({ ratingsList, categoryOptions, changeRating, activeRatingId, changeCategory, activeCategoryId, enterSearchInput, changeSearchInput, searchInput, clearFilters }) => {
  // Render Ratings Filters List (unchanged)
  const renderRatingsFiltersList = () => {
    return ratingsList.map(rating => {
      const ratingClassName = activeRatingId === rating.ratingId ? `and-up active-rating` : `and-up`

      const onClickRatingItem = () => changeRating(rating.ratingId)

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  // Render Ratings Filters Section (unchanged)
  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </div>
  )

  // Render Categories List (unchanged)
  const renderCategoriesList = () => {
    return categoryOptions.map(category => {
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive ? `category-name active-category-name` : `category-name`

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  // Render Product Categories Section (unchanged)
  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </>
  )

  // Handle Enter Key Press for Search (unchanged)
  const onEnterSearchInput = (event) => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  // Handle Input Change for Search (unchanged)
  const onChangeSearchInput = (event) => {
    changeSearchInput(event.target.value)
  }

  // Render Search Input Section (unchanged)
  const renderSearchInput = () => {
    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  // Return the JSX for the Filter Group (unchanged)
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FilterTheProducts
