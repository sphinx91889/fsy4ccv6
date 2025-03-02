import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function RefreshPersistence() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Save current path to localStorage whenever location changes
    localStorage.setItem('lastVisitedPath', location.pathname)
  }, [location.pathname])

  useEffect(() => {
    // Check if there's a saved path on initial load
    const savedPath = localStorage.getItem('lastVisitedPath')
    
    // If there's a saved path and we're on the root path, navigate to the saved path
    if (savedPath && (window.location.pathname === '/' || window.location.pathname === '')) {
      navigate(savedPath)
    }
  }, [navigate])

  return null
}
