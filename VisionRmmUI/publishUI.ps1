Remove-Item -Path ..\VisionRmmApi\wwwroot\static -Force -Recurse
npm run build
xcopy build\ ..\VisionRmmApi\wwwroot\ /s /y /q