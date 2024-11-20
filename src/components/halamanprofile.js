import React, { useState } from "react";
import "./profile.css";

const HalamanProfile = () => {
  const [modal, setModal] = useState(null); // State untuk modal

  const closeModal = () => setModal(null); // Fungsi untuk menutup modal

  return (
    <div className="main-container">
      {/* Kontainer Profil */}
      <div className="profile-container">
        <div className="profile-photo-border">
          <img
            className="profile-photo"
            src="profile-pic.jpg"
            alt="Profile"
          />
        </div>
        <div className="profile-name-section">
          <h1 className="profile-name">Key Alderen</h1>
          <p className="profile-subtitle">keyalderen</p>
        </div>
        <button className="logout-button">Keluar</button>
      </div>

      {/* Daftar Opsi */}
      <div className="options-container">
        <div className="option-item" onClick={() => setModal("uploadPhoto")}>
          <span>Ubah Foto Profil</span>
        </div>
        <div className="option-item" onClick={() => setModal("editProfile")}>
          <span>Edit Profil</span>
        </div>
        <div className="option-item" onClick={() => setModal("changePassword")}>
          <span>Ubah Kata Sandi</span>
        </div>
        <div
          className="option-item"
          onClick={() => alert("Daftar transaksi belum terhubung.")}
        >
          <span>Daftar Transaksi</span>
        </div>
      </div>

      {/* Modals */}
      {modal === "uploadPhoto" && <UploadPhotoModal closeModal={closeModal} />}
      {modal === "editProfile" && <EditProfileModal onClose={closeModal} />}
      {modal === "changePassword" && (
        <ChangePasswordModal closeModal={closeModal} />
      )}
    </div>
  );
};


const UploadPhotoModal = ({ closeModal }) => (
  <div className="modal">
    <h2>Pilih Foto Profil</h2>
    <input type="file" accept="image/*" />
    <button onClick={closeModal}>Tutup</button>
  </div>
);

const EditProfileModal = ({ closeModal }) => (
  <div className="modal">
    <h2>Edit Profil</h2>
    <form>
      <input type="text" placeholder="Nama Lengkap" />
      <input type="text" placeholder="Nama Pengguna" />
      <input type="email" placeholder="Email" />
      <button type="submit">Simpan</button>
    </form>
    <button onClick={closeModal}>Tutup</button>
  </div>
);

const ChangePasswordModal = ({ closeModal }) => (
  <div className="modal">
    <h2>Ubah Kata Sandi</h2>
    <form>
      <input type="password" placeholder="Kata Sandi Lama" />
      <input type="password" placeholder="Kata Sandi Baru" />
      <input type="password" placeholder="Konfirmasi Kata Sandi" />
      <button type="submit">Ubah</button>
    </form>
    <button onClick={closeModal}>Tutup</button>
  </div>
);

export default HalamanProfile;
