// Printers - EPSON ET85XX > Silhouette - 7 Card - Front

// === CONFIG - You can edit these values ===

// --- Layout ---
var layout = "SevenCard";
var pageWidthInches = 8.5;
var pageHeightInches = 11;
var dpi = 800;
var paperType = "Letter";

// --- Card Format ---
var cardFormat = "MPC";
var cardWidthMM = 69;
var cardHeightMM = 94;

// --- Cut & Bleed ---
var cutMarkSize = 4.5;
var cutOffset = 3.04;
var showCropMarks = false;

// --- Color Adjustments ---
var bright = 15;
var contr = 18;
var vib = 0;
var sat = 50;
var gmm = 1.05;
var whitepoint = 255;
var blackpoint = 0;

// --- Back Alignment ---
var cardBack = false;
var backOffsetXmm = 0;
var backOffsetYmm = 0;
var selectEachCard = false;

// --- Silhouette ---
var useSilhouette = true;
// --- Batch PDF Settings ---
var batchMultiPage = false;
var noBackImage = false;
var separateBackPDF = false;

// --- Notes ---
var notesOn = true;
var noteFontSize = 10;
var manualNote = "EPSON ET-85XX | Koala Double-Sided Gloss Paper | Premium Photo Paper Gloss - HIGH | ICC: ET-8500 - RR UltraPro Gloss Epson ET-85xx v2";

// --- Meta Info ---
var configCreateDate = "2025-07-19T02:58:07.299Z";

// === END CONFIG ===

// INCLUDE THE RE_PhotoEngine.jsx FILE - DO NOT REMOVE
#include "../../RE_PhotoEngine/RE_PhotoEngine.jsx"