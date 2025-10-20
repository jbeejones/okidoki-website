---
title: XUtil CLI Installation Guide (example)
handlebars: true
---

# {{title}}

{{#alert}}
**XUtil** is a powerful cross-platform command-line utility for file manipulation, data processing, and system automation.

**Current Version**: v2.1.4 | **Release Date**: December 2024
{{/alert}}

## Overview

XUtil is a modern CLI tool that provides developers and system administrators with essential utilities for:
- File compression and encryption
- JSON/XML data transformation
- System monitoring and reporting
- Automated backup and sync operations
- Network diagnostics and testing

{{#alert type="success"}}
**Zero Dependencies**: XUtil is distributed as a single binary with no external dependencies required.
{{/alert}}

---

## System Requirements

### Minimum Requirements

| Platform | Architecture | Memory | Disk Space |
|----------|-------------|--------|------------|
| **Linux** | x64, ARM64 | 512 MB | 50 MB |
| **macOS** | x64, ARM64 (M1/M2) | 512 MB | 50 MB |
| **Windows** | x64, ARM64 | 1 GB | 50 MB |

{{#alert type="warning"}}
**Note**: Windows users require PowerShell 5.1 or later for optimal functionality.
{{/alert}}

---

## Installation Methods

### Method 1: Package Managers {{badge "Recommended" "success"}}

{{#tabs}}
  {{#tab title="macOS (Homebrew)"}}
```bash
# Install XUtil via Homebrew
brew tap xutil/tap
brew install xutil

# Verify installation
xutil --version
```

{{#alert type="info"}}
**Auto-updates**: Homebrew installations receive automatic updates via `brew upgrade`.
{{/alert}}
  {{/tab}}
  
  {{#tab title="Linux (APT)"}}
```bash
# Add XUtil repository (Ubuntu/Debian)
curl -fsSL https://packages.xutil.dev/gpg | sudo apt-key add -
echo "deb https://packages.xutil.dev/apt stable main" | sudo tee /etc/apt/sources.list.d/xutil.list

# Install XUtil
sudo apt update
sudo apt install xutil

# Verify installation
xutil --version
```
  {{/tab}}
  
  {{#tab title="Linux (YUM/DNF)"}}
```bash
# Add XUtil repository (RHEL/CentOS/Fedora)
sudo tee /etc/yum.repos.d/xutil.repo > /dev/null <<EOF
[xutil]
name=XUtil Repository
baseurl=https://packages.xutil.dev/rpm
enabled=1
gpgcheck=1
gpgkey=https://packages.xutil.dev/gpg
EOF

# Install XUtil (RHEL/CentOS)
sudo yum install xutil

# Install XUtil (Fedora)
sudo dnf install xutil

# Verify installation
xutil --version
```
  {{/tab}}
  
  {{#tab title="Windows (Chocolatey)"}}
```powershell
# Install via Chocolatey
choco install xutil

# Verify installation
xutil --version
```

{{#alert type="info"}}
**PATH Setup**: Chocolatey automatically adds XUtil to your system PATH.
{{/alert}}
  {{/tab}}
  
  {{#tab title="Windows (Scoop)"}}
```powershell
# Add XUtil bucket
scoop bucket add xutil https://github.com/xutil/scoop-bucket.git

# Install XUtil
scoop install xutil

# Verify installation
xutil --version
```
  {{/tab}}
{{/tabs}}

### Method 2: Direct Download {{badge "Manual" "secondary"}}

{{#tabs}}
  {{#tab title="Linux/macOS"}}
```bash
# Download latest release
curl -L "https://github.com/xutil/xutil/releases/latest/download/xutil-$(uname -s)-$(uname -m).tar.gz" | tar xz

# Move to system path
sudo mv xutil /usr/local/bin/

# Make executable
sudo chmod +x /usr/local/bin/xutil

# Verify installation
xutil --version
```
  {{/tab}}
  
  {{#tab title="Windows (PowerShell)"}}
```powershell
# Create installation directory
New-Item -ItemType Directory -Force -Path "$env:LOCALAPPDATA\XUtil"

# Download latest release
$LatestRelease = Invoke-RestMethod -Uri "https://api.github.com/repos/xutil/xutil/releases/latest"
$DownloadUrl = $LatestRelease.assets | Where-Object { $_.name -match "xutil-Windows-x64.zip" } | Select-Object -ExpandProperty browser_download_url

Invoke-WebRequest -Uri $DownloadUrl -OutFile "$env:TEMP\xutil.zip"

# Extract and install
Expand-Archive -Path "$env:TEMP\xutil.zip" -DestinationPath "$env:LOCALAPPDATA\XUtil" -Force

# Add to PATH (requires restart or new session)
$CurrentPath = [Environment]::GetEnvironmentVariable("PATH", [EnvironmentVariableTarget]::User)
if ($CurrentPath -notlike "*$env:LOCALAPPDATA\XUtil*") {
    [Environment]::SetEnvironmentVariable("PATH", "$CurrentPath;$env:LOCALAPPDATA\XUtil", [EnvironmentVariableTarget]::User)
}

# Verify installation (in new session)
xutil --version
```
  {{/tab}}
{{/tabs}}

### Method 3: From Source {{badge "Advanced" "warning"}}

{{#alert type="warning"}}
**Prerequisites**: Requires Go 1.21+ and Git
{{/alert}}

```bash
# Clone repository
git clone https://github.com/xutil/xutil.git
cd xutil

# Build from source
make build

# Install globally
sudo make install

# Verify installation
xutil --version
```

---

## Post-Installation Setup

### Shell Completion {{badge "Optional" "info"}}

Enable tab completion for your shell:

{{#tabs}}
  {{#tab title="Bash"}}
```bash
# Generate completion script
xutil completion bash > ~/.xutil-completion.bash

# Add to .bashrc
echo 'source ~/.xutil-completion.bash' >> ~/.bashrc

# Reload shell
source ~/.bashrc
```
  {{/tab}}
  
  {{#tab title="Zsh"}}
```bash
# Generate completion script
xutil completion zsh > ~/.xutil-completion.zsh

# Add to .zshrc
echo 'source ~/.xutil-completion.zsh' >> ~/.zshrc

# Reload shell
source ~/.zshrc
```
  {{/tab}}
  
  {{#tab title="Fish"}}
```bash
# Generate completion script
xutil completion fish > ~/.config/fish/completions/xutil.fish

# Reload fish
fish -c "source ~/.config/fish/completions/xutil.fish"
```
  {{/tab}}
{{/tabs}}

### Configuration File {{badge "Optional" "info"}}

Create a global configuration file:

```bash
# Create config directory
mkdir -p ~/.config/xutil

# Generate default config
xutil config init > ~/.config/xutil/config.yaml
```

**Default Configuration**:
```yaml
# ~/.config/xutil/config.yaml
global:
  log_level: info
  temp_dir: /tmp/xutil
  max_concurrent_jobs: 4

compression:
  default_algorithm: gzip
  compression_level: 6

encryption:
  default_cipher: aes-256-gcm
  key_derivation: pbkdf2

network:
  timeout: 30s
  retry_attempts: 3
  user_agent: "XUtil/2.1.4"
```

---

## Verification

### Basic Functionality Test

Run these commands to verify XUtil is working correctly:

```bash
# Check version and build info
xutil version --detailed

# Test file operations
echo "Hello XUtil!" > test.txt
xutil compress test.txt
xutil decompress test.txt.gz

# Test JSON processing
echo '{"name": "test", "value": 42}' | xutil json pretty

# Test system info
xutil system info

# Cleanup
rm test.txt*
```

### Expected Output

{{#alert type="success"}}
**Success Indicators**:
- Version command shows: `XUtil v2.1.4 (build: abc123def)`
- All test commands complete without errors
- Help system accessible via `xutil --help`
{{/alert}}

---

## Troubleshooting

### Common Issues

{{#alert type="danger"}}
**"command not found: xutil"**

**Solutions**:
1. Verify installation completed successfully
2. Check if binary is in your PATH: `echo $PATH`
3. Try running with full path: `/usr/local/bin/xutil --version`
4. Reload your shell or restart terminal
{{/alert}}

{{#alert type="warning"}}
**Permission denied errors on Linux/macOS**

**Solutions**:
1. Ensure binary is executable: `chmod +x /usr/local/bin/xutil`
2. Check file ownership: `ls -la /usr/local/bin/xutil`
3. Try running with sudo for initial setup
{{/alert}}

{{#alert type="info"}}
**Windows PowerShell execution policy errors**

**Solutions**:
1. Run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
2. Or download the unsigned binary version
{{/alert}}

### Getting Help

- **Documentation**: https://docs.xutil.dev
- **GitHub Issues**: https://github.com/xutil/xutil/issues
- **Community Forum**: https://community.xutil.dev
- **Discord**: https://discord.gg/xutil

### Uninstallation

{{#tabs}}
  {{#tab title="Package Manager"}}
```bash
# Homebrew
brew uninstall xutil

# APT
sudo apt remove xutil

# YUM/DNF
sudo yum remove xutil  # or dnf remove xutil

# Chocolatey
choco uninstall xutil

# Scoop
scoop uninstall xutil
```
  {{/tab}}
  
  {{#tab title="Manual Removal"}}
```bash
# Remove binary
sudo rm /usr/local/bin/xutil

# Remove config (optional)
rm -rf ~/.config/xutil

# Remove shell completions (optional)
rm ~/.xutil-completion.*
```
  {{/tab}}
{{/tabs}}

---

{{#alert type="success"}}
**Installation Complete!** 

You're now ready to use XUtil. Start with `xutil --help` to explore available commands, or visit our [Getting Started Guide](./xutil-quickstart) for tutorials and examples.
{{/alert}} 