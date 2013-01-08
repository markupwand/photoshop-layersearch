require 'fileutils'

PACKAGE_FOLDER = "package"
INSTALL_DIR = "/Applications/Adobe Photoshop CS5/Plug-ins/Panels"

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
  puts "Installing LayerSearch"

end


task :default => [:install]