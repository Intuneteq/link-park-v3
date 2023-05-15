// import { useState, useEffect } from 'react'

export const getStorageData = (keyName, defaultValue) => {
  const savedItem = localStorage.getItem(keyName)
  return savedItem || defaultValue
}

// export const useLocalStorage = (keyName, value) => {}
