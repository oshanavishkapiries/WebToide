import os
import subprocess
import sys
from pathlib import Path

# --- Step 1: Create virtual environment ---
venv_dir = Path("venv")

if not venv_dir.exists():
    print("[*] Creating virtual environment...")
    subprocess.check_call([sys.executable, "-m", "venv", str(venv_dir)])
else:
    print("[*] Virtual environment already exists.")

# --- Step 2: Install packages inside venv ---
# Pick correct pip path depending on OS
if os.name == "nt":  # Windows
    pip_path = venv_dir / "Scripts" / "pip.exe"
    python_path = venv_dir / "Scripts" / "python.exe"
else:  # Linux / macOS
    pip_path = venv_dir / "bin" / "pip"
    python_path = venv_dir / "bin" / "python"

print("[*] Installing Selenium and WebDriver-Manager...")
subprocess.check_call([str(pip_path), "install", "--upgrade", "pip"])
subprocess.check_call([str(pip_path), "install", "selenium", "webdriver-manager", "ipykernel"])

print("[*] Installing kernel for WebToIDE...")
subprocess.check_call([str(python_path), "-m", "ipykernel", "install", "--user", "--name=webtoide_venv", "--display-name=\"Python (WebToIDE venv)\""])
