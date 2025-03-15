/* eslint-disable */
import React from 'react'

const PreLoading = () => {
  return (
    <div id="preloader" class="preloader">
      <div class="txt-loading">
        <div class="preloader-text">
          <img class="logo-icon" src="assets/img/logo-icon.svg" alt="logo" />
        </div>
        <div class="loading-border-content">
          <div class="loading-percent">0%</div>
          <div class="loading-border-show">
            <div class="loading-border"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreLoading
