#!/usr/bin/env bash
# Generate all images for workerscompensationexemptions.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/workerscompensationexemptions.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — WORKERS COMPENSATION EXEMPTIONS ===

gen "hero.jpg" \
  "Photorealistic wide shot of an insurance consultant at a desk with a large US state map and workers compensation documents, professional office photography, no text" 4

gen "coverage.jpg" \
  "Photorealistic photo of a business owner consulting with an exemption specialist, reviewing state-by-state compliance guide, professional office setting, no text" 4

gen "about.jpg" \
  "Photorealistic portrait of a knowledgeable insurance professional with reference books and state guides visible in background, professional library office setting, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide panoramic photo of a professional insurance office with multiple state compliance guides and a consultant assisting clients at a conference table, no text" 4 1216 640

gen "state-exemption-guide.jpg" \
  "Photorealistic photo of a US map with highlighted states showing workers comp exemption variations, professional business document photography, no text" 4

gen "llc-member-exemption.jpg" \
  "Photorealistic photo of LLC business owners reviewing operating agreement and state compliance documents at a conference table, professional photography, no text" 4

gen "family-member-exemption.jpg" \
  "Photorealistic photo of a small family business owner couple reviewing insurance exemption paperwork together in a small business office, warm professional photography, no text" 4

gen "independent-contractor.jpg" \
  "Photorealistic photo of an independent contractor reviewing a 1099 form and workers comp documentation at a home office desk, professional photography, no text" 4

gen "corporate-officer-exemption.jpg" \
  "Photorealistic photo of corporate officers in a boardroom reviewing workers compensation exemption eligibility documents, professional business photography, no text" 4

gen "seasonal-worker-rules.jpg" \
  "Photorealistic photo of a seasonal business owner reviewing worker classification and workers comp documentation at a desk, professional photography, no text" 4

gen "alternative-wc-solutions.jpg" \
  "Photorealistic photo of an insurance agent presenting alternative workers compensation solutions to a business client, professional consultation scene, no text" 4

gen "compliance-audit.jpg" \
  "Photorealistic photo of an insurance auditor reviewing workers comp exemption files and compliance records at a desk, professional audit scene, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
