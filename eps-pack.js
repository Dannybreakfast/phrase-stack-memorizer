// T-45C Immediate Action Items — built-in pack for phrase-stack-memorizer
// Source: IC 21/43 November 2023 (page 1)
// ids use prefix ep-builtin-; merge into Saved without wiping other passages.
window.EPS_PACK = [
  {
    "id": "ep-builtin-clear-engine-procedure-abnormal-start-tp-fire-on-shutdown",
    "name": "EP — CLEAR ENGINE PROCEDURE/ABNORMAL START/TP FIRE ON SHUTDOWN",
    "text": "1. Throttle - off"
  },
  {
    "id": "ep-builtin-emergency-shutdown-egress",
    "name": "EP — EMERGENCY SHUTDOWN/EGRESS",
    "text": "1. Throttle - Off\n2. Engine switch - Off\n3. Fuel Shutoff Handle – Pull\n4. Ejection Seats – Safe\n5. Batt switches - Off"
  },
  {
    "id": "ep-builtin-engine-failure",
    "name": "EP — ENGINE FAILURE",
    "text": "If below 1,500 feet AGL and airspeed below 180KIAS:\n1. Eject\nOtherwise:\n2. Execute airstart"
  },
  {
    "id": "ep-builtin-airstart",
    "name": "EP — AIRSTART",
    "text": "1. Emergency oxygen green ring(s) - pull\n2. Throttle - off\nSimultaneously perform steps *3. and *4.\n3. GTS Start Button – Press\n4. Throttle - Idle\nIf unsuccessful (no relight within 30 seconds after moving throttle to idle or stabilized EGT exceeds limits):\n5. Throttle – off (allow 30 seconds to drain if practical)\nIf above 13% RPM and 250 KIAS, repeat steps *3 and *4.\nOtherwise, proceed to step 6."
  },
  {
    "id": "ep-builtin-compressor-stall-or-egt-rpm-warning-light",
    "name": "EP — COMPRESSOR STALL OR EGT/RPM WARNING LIGHT",
    "text": "1. Throttle - idle\n2. EGT/RPM - check\nIf EGT is greater than 450°C for more than 6 seconds at idle:\n3. Execute engine failure procedure\nIf EGT responds normally:\n4. Throttle – slowly advance to minimum for safe flight\n5. Minimize throttle movements"
  },
  {
    "id": "ep-builtin-abort",
    "name": "EP — ABORT",
    "text": "1. Throttle - idle\n2. Speed brakes - extend\n3. Brakes - apply\n4. Hook – down (if required)\n5. Brakes – release prior to crossing the arresting gear"
  },
  {
    "id": "ep-builtin-emergency-catapult-flyaway",
    "name": "EP — EMERGENCY CATAPULT FLYAWAY",
    "text": "1. Throttle - MRT\n2. Maintain 24 units AOA\nIf engine failed, or unable to stop settle:\n3. Eject"
  },
  {
    "id": "ep-builtin-brake-failure-ashore-skid",
    "name": "EP — BRAKE FAILURE – ASHORE / SKID",
    "text": "If flyaway airspeed available:\n1. Go around\nIf flyaway airspeed not available, or during taxi:\n2. Throttle - idle\n3. Brakes - release\n4. Anti-skid switch - off\n5. Brakes – apply gradually\nIf brakes still unavailable:\n6. Hook – down (if required)\n7. Parking brake handle – pull (if required)"
  },
  {
    "id": "ep-builtin-brake-failure-afloat",
    "name": "EP — BRAKE FAILURE – AFLOAT",
    "text": "1. Throttle - idle\n2. Parking brake handle - pull\n3. Hook – down\n4. Transmit"
  },
  {
    "id": "ep-builtin-loss-of-directional-control",
    "name": "EP — LOSS OF DIRECTIONAL CONTROL",
    "text": "If flyaway airspeed available:\n1. Go-around\nIf flyaway airspeed not available:\n2. Abort\nIf blown tire suspected:\n3. Brakes - release\n4. Anti-skid switch - off\n5. Brakes – apply gradually\nIf NWS failure suspected:\n6. Paddle switch - press"
  },
  {
    "id": "ep-builtin-asymmetric-flaps-slats",
    "name": "EP — ASYMMETRIC FLAPS/SLATS",
    "text": "1. FLAPS/SLATS lever – Return to previous setting"
  },
  {
    "id": "ep-builtin-departure-spin-procedure",
    "name": "EP — DEPARTURE/SPIN PROCEDURE",
    "text": "1. Controls – neutralize / forcibly center rudder pedals\n2. Speed Brakes - retract\n3. Throttle - idle\n4. Check altitude, AOA, Airspeed, and turn needle\nIf spin confirmed:\nINVERTED (AOA pegged at 0 units):\n5. Rudder pedal – full opposite turn needle\n6. Lateral stick – full opposite turn needle\n7. Longitudinal stick - neutralize\nUPRIGHT (AOA above 28 units):\n8. Rudder pedal – full opposite turn needle\n9. Lateral stick – full with turn needle\n10. Longitudinal stick - neutralize\nIf recovery indicated or airspeed increasing through 160 KIAS:\n11. Lateral stick - neutralize\nWhen recovery indicated:\n12. Rudder pedals – smoothly center\nIf out of control passing through 10,000 feet AGL:\n13. Eject"
  },
  {
    "id": "ep-builtin-total-electrical-failure",
    "name": "EP — TOTAL ELECTRICAL FAILURE",
    "text": "1. Emergency oxygen green ring(s) - pull"
  },
  {
    "id": "ep-builtin-adverse-physiological-symptoms",
    "name": "EP — ADVERSE PHYSIOLOGICAL SYMPTOMS",
    "text": "If above 10,000 feet cabin altitude:\n1. Emergency oxygen green ring(s) - pull\n2. OBOGS flow selector(s) – off\n3. Descend below 10,000 feet cabin altitude."
  },
  {
    "id": "ep-builtin-rapid-decompression",
    "name": "EP — RAPID DECOMPRESSION",
    "text": "1. Emergency oxygen green ring(s) - pull\n2. OBOGS flow selector(s) – off\n3. Descend below 10,000 feet cabin altitude."
  },
  {
    "id": "ep-builtin-electrical-fire",
    "name": "EP — ELECTRICAL FIRE",
    "text": "1. Gen switch - off"
  },
  {
    "id": "ep-builtin-smoke-or-fumes-in-cockpit",
    "name": "EP — SMOKE OR FUMES IN COCKPIT",
    "text": "1. Mask – on/tight\n2. Initiate controlled descent to below 18,000 feet MSL\n3. Air Flow Knob – Off (below 18,000 feet MSL if possible)\nIf unable to clear smoke or unable to see:\n4. Airspeed – reduce (as practical)\n5. Warn other cockpit occupant / secure loose items\n6. Seat - lower\n7. MDC Firing Handle - pull"
  },
  {
    "id": "ep-builtin-fire-warning-light",
    "name": "EP — FIRE WARNING LIGHT",
    "text": "GROUND\n1. Execute emergency shutdown / egress\nTAKEOFF\nIf decision is made to stop:\n1. Abort\nIf fire is confirmed and unable to abort:\n2. Eject\nIN-FLIGHT\n1. Throttle – minimum for safe flight\n2. Check for secondary indications of fire\nIf fire confirmed or flight control lost:\n3. Eject\nIf fire not confirmed and control effectiveness remains:\n4. Land as soon as possible"
  },
  {
    "id": "ep-builtin-gts-fire-warning-light",
    "name": "EP — GTS FIRE WARNING LIGHT",
    "text": "GROUND\n1. Execute emergency shutdown / egress\nIN-FLIGHT\n1. Engine switch - off"
  },
  {
    "id": "ep-builtin-oil-press-warning-light",
    "name": "EP — OIL PRESS WARNING LIGHT",
    "text": "1. Throttle – Set and maintain 78 to 87% rpm.\n2. Minimize throttle movements."
  },
  {
    "id": "ep-builtin-oxygen-warning-light",
    "name": "EP — OXYGEN WARNING LIGHT",
    "text": "IN-FLIGHT\n1. Throttle - Set minimum 80% rpm.\n2. Execute Adverse Physiological Symptoms (as required)."
  },
  {
    "id": "ep-builtin-tp-hot-caution-light",
    "name": "EP — TP HOT CAUTION LIGHT",
    "text": "GROUND\n1. Execute emergency shutdown / egress\nIN-FLIGHT\n1. Throttle – minimum for safe flight"
  }
];
