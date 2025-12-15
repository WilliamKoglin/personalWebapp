from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import os
from app.api.will_endpoints import router as api_router

def create_application() -> FastAPI:
    application = FastAPI(
        title="Nevermore API",
        description="FastAPI server for the Nevermore project",
        version="0.1.0",
    )
    
    # Include API routes
    application.include_router(api_router, prefix="/api")
    
    # Serve React frontend
    frontend_path = os.path.join(os.path.dirname(__file__), "../../../app/build")
    application.mount("/", StaticFiles(directory=frontend_path, html=True), name="frontend")
    
    return application

app = create_application()
