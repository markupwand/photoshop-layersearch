#!/usr/bin/rake

require 'fileutils'

PACKAGE_FOLDER = "package"
INSTALL_CS4    = "/Applications/Adobe Photoshop CS4/Plug-ins/Panels"
INSTALL_CS5    = "/Applications/Adobe Photoshop CS5/Plug-ins/Panels"
INSTALL_NAME   = "/LayerSearch"

def is_mac?
  RUBY_PLATFORM.downcase.include?("darwin")
end

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
  if is_mac?
    if File.directory? INSTALL_CS5
      puts "Installing LayerSearch to #{INSTALL_CS5}"
      FileUtils.cp_r PACKAGE_FOLDER, (INSTALL_CS5 + INSTALL_NAME)
    else
      puts "Sorry, Adobe Photoshop 5 was not found in this system"
    end

  else
    puts "Sorry, works only on mac. You can fork and create for windows."
  end
  puts
end

task :uninstall do
  puts "Uninstalling"
  FileUtils.rm_rf(INSTALL_CS5 + INSTALL_NAME)
  puts
end


task :default => [:install]
