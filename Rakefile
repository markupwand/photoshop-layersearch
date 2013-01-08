require 'fileutils'

PACKAGE_FOLDER = "package"
INSTALL_PARENT = "/Applications/Adobe Photoshop CS5/Plug-ins/Panels"
INSTALL_NAME    = "/LayerSearch"

task :clean do
  puts "Cleaning up"
  FileUtils.rm_rf(PACKAGE_FOLDER)
  puts
end

task :package => [:clean] do
  puts "Creating package folder"
  target = Dir.mkdir(PACKAGE_FOLDER)
  source_files = ['bin-release/LayerSearch.swf', 'bin-release/LayerSearch.jsx',
    'assets/LayerSearchNormal.png', 'assets/LayerSearchRollover.png']
  source_files.each do |src_file|
    puts "Copying #{src_file} to #{PACKAGE_FOLDER}"
    FileUtils.cp src_file, PACKAGE_FOLDER
  end

  puts "Done creating package"
  puts
end

task :install => [:package]do 
  puts "Installing LayerSearch to #{INSTALL_PARENT}"
  FileUtils.cp_r PACKAGE_FOLDER, (INSTALL_PARENT + INSTALL_NAME)
  puts
end

task :uninstall do
  puts "Uninstalling"
  FileUtils.rm_rf(INSTALL_PARENT + INSTALL_NAME)
  puts
end


task :default => [:install]