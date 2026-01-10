@echo off
setlocal

rem Set your lab number here
set "labNumber=0"

rem Pad the lab number with leading zeros (up to 3 digits)
set "labNumberPadded=00%labNumber%"
set "labNumberPadded=%labNumberPadded:~-3%"

set "a1_zip=a1-lab%labNumberPadded%.zip"
set "a2_zip=a2-lab%labNumberPadded%.zip"
set "a3_zip=a3-lab%labNumberPadded%.zip"

rem Default target
if "%1"=="" goto all
if /i "%1"=="all" goto all
if /i "%1"=="a1" goto a1
if /i "%1"=="a2" goto a2
if /i "%1"=="a3" goto a3
if /i "%1"=="clean" goto clean

echo Invalid target: %1
exit /b 1

:all
call :a1
call :a2
call :a3
goto :eof

:a1
if exist "%a1_zip%" del "%a1_zip%"
tar -a -c -f "%a1_zip%" "a1-markup/index.html" "a1-markup/style.css" "a1-markup/report.md"
goto :eof

:a2
if exist "%a2_zip%" del "%a2_zip%"
tar -a -c -f "%a2_zip%" "a2-scripting"
goto :eof

:a3
if exist "%a3_zip%" del "%a3_zip%"
tar -a -c -f "%a3_zip%" --exclude "a3-server/node_modules" --exclude "a3-server/package-lock.json" --exclude "a3-server/media.db" "a3-server"
goto :eof

:clean
if exist "%a1_zip%" del "%a1_zip%"
if exist "%a2_zip%" del "%a2_zip%"
if exist "%a3_zip%" del "%a3_zip%"
goto :eof
