@echo off
setlocal

REM Step 1: Navigate to Backend folder and check if node_modules exists
cd Backend
if exist node_modules (
    echo Node modules found in Backend. Running node index.js...
) else (
    echo Node modules not found in Backend. Installing...
    npm install
)
start cmd /k "node index.js"

REM Step 2: Open a new terminal for Frontend and check if node_modules exists
cd ..
cd Frontend
if exist node_modules (
    echo Node modules found in Frontend. Running npm start...
) else (
    echo Node modules not found in Frontend. Installing...
    npm install
)
start cmd /k "npm start"

REM Step 3: Open another new terminal for Admin and check if node_modules exists
cd ..
cd Admin
if exist node_modules (
    echo Node modules found in Admin. Running npm run dev...
) else (
    echo Node modules not found in Admin. Installing...
    npm install
)
start cmd /k "npm run dev"

endlocal
